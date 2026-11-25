**Documento de Registro do Projeto**  
**PROJETO:** Sensoriamento e Controle de Chocadeira Aviária  
**EQUIPE:** João Paulo Bastos, Thiago Rafael, Rafael Elim, Flavio Eduardo, Pedro Lucas  

---

### 1. DESCRIÇÃO INFORMAL
Sistema embarcado de monitoramento e controle térmico para chocadeira aviária. Utiliza ESP32 + DHT22 para medir a temperatura do ambiente de incubação. Mantém a temperatura na faixa ideal (37,5 °C a 38,0 °C) acionando aquecedor ou resfriador. Em situações críticas (< 27,0 °C ou > 39,0 °C) ou falha de leitura, dispara alerta simulado por e-mail. Continua operando normalmente mesmo em queda da rede elétrica principal (modo nobreak simulado). Resolve o problema de perda de embriões por descontrole térmico ou falta de energia.

---

### 2. ARQUITETURA (4 camadas da IoT)
- **Percepção:** ESP32 + sensor DHT22 (temperatura) + LED vermelho (aquecedor) + LED azul (resfriador) + chave deslizante (simulação de rede elétrica / nobreak).
- **Rede:** Monitor Serial simula telemetria MQTT/Wi-Fi e envio de e-mail de alerta (`[TELEMETRIA MQTT]` e `[CAMADA APLICACAO - ENVIO DE E-MAIL]`).
- **Processamento:** Regras de decisão no próprio ESP32 (controle térmico, alertas críticos e tratamento de falha de leitura / energia). Loop não-bloqueante de 5 s.
- **Aplicação:** Acionamento dos LEDs (aquecedor/resfriador), mensagens de alerta no Monitor Serial e indicação de modo nobreak.
- **Premissas:** 
  - LEDs + resistores de 220 Ω substituem relé de estado sólido / MOSFET do aquecedor e do resfriador.
  - Chave deslizante simula presença/falha da rede elétrica principal.
  - Envio real de e-mail e MQTT são simulados no Monitor Serial.
  - Biblioteca `DHT sensor library` disponível no Wokwi.

---

### 3. REQUISITOS FUNCIONAIS
| ID   | Requisito |
|------|-----------|
| **RF01** | O sistema deve ler a temperatura do DHT22 a cada 5 segundos (ciclo não-bloqueante). |
| **RF02** | Quando ocorrer condição crítica ou falha de sensor, o sistema deve simular envio de e-mail de alerta no Monitor Serial. |
| **RF03** | Condições críticas: temperatura < 27,0 °C, > 39,0 °C ou leitura inválida (NaN). |
| **RF04** | Controle térmico: temperatura < 37,5 °C → liga aquecedor (GPIO 18) e desliga resfriador; temperatura > 38,0 °C → liga resfriador (GPIO 19) e desliga aquecedor. |
| **RF05** | Na faixa ideal (37,5 °C a 38,0 °C) ambos os atuadores devem permanecer desligados. |

---

### 4. REQUISITOS NÃO FUNCIONAIS
| ID     | Requisito |
|--------|-----------|
| **RNF01** | Robustez: leitura inválida (NaN) não trava o sistema; desliga atuadores por segurança, mostra erro e tenta novamente no próximo ciclo. |
| **RNF02** | Intervalo de leitura exatamente 5 000 ms com `millis()` (não-bloqueante). |
| **RNF03** | Pinagem do sensor: DHT22 no GPIO 4 (dados). |
| **RNF04** | Pinagem dos atuadores: aquecedor (LED vermelho) no GPIO 18; resfriador (LED azul) no GPIO 19 (com resistores de 220 Ω). |
| **RNF05** | Alimentação: DHT22 em 3V3 e GND. |
| **RNF07** | Continuidade operacional: detecção de queda de energia via chave deslizante no GPIO 21; sistema continua lendo e controlando enquanto opera em modo nobreak (simulado). |
| **Linguagem** | Arduino C++ (biblioteca DHT disponível no Wokwi). |

---

### 5. CRITÉRIOS DE ACEITAÇÃO
| ID    | Critério | Resultado esperado |
|-------|----------|--------------------|
| **CA01** | RF01 + RNF01/RNF02 | Ao iniciar a simulação, aparece nova linha de telemetria a cada ~5 s. |
| **CA02** | RF02 + RF03 | Temperatura > 39,0 °C ou < 27,0 °C → bloco de e-mail de alerta crítico no Serial. |
| **CA03** | RF04 | < 37,5 °C → LED vermelho (GPIO 18) aceso; > 38,0 °C → LED azul (GPIO 19) aceso. |
| **CA04** | RNF07 | Comutar chave para GND → mensagem de queda de energia + nobreak; controle térmico continua funcionando. |
| **CA05** | RF05 | Entre 37,5 °C e 38,0 °C ambos os LEDs apagados. |
| **CA06** | RNF01 | Leitura NaN → mensagem de erro + atuadores desligados + alerta de e-mail de hardware. |

---

### 6. TABELA DE LIGAÇÕES (conforme RNF e diagrama Wokwi)
| Componente              | Pino do Componente | Pino ESP32 | Observação |
|-------------------------|--------------------|------------|------------|
| DHT22                   | VCC                | 3V3        | RNF05 |
| DHT22                   | SDA (Dados)        | GPIO 4     | RNF03 |
| DHT22                   | GND                | GND        | RNF05 |
| LED Vermelho (Aquecedor)| Ânodo (+)          | GPIO 18    | Via resistor 220 Ω (RNF04) |
| LED Azul (Resfriador)   | Ânodo (+)          | GPIO 19    | Via resistor 220 Ω (RNF04) |
| Chave Deslizante        | Central (COM)      | GPIO 21    | Simula rede elétrica (RNF07) |
| Chave Deslizante        | Lateral 1          | GND        | Queda de energia |
| Chave Deslizante        | Lateral 2          | 3V3        | Rede normal |

Arquivo de circuito: `circuito.json` (pronto para colar no Wokwi).

---

### 7. CÓDIGO DESENVOLVIDO
Arquivo principal: `test-code.ino` (Arduino C++).  
Todos os trechos estão comentados com o RF/RNF/CA correspondente.  
Principais pontos:
- Leitura não-bloqueante a cada 5 s (`millis()`).
- Tratamento de NaN com desligamento seguro dos atuadores.
- Controle térmico nos limites 37,5 / 38,0 °C.
- Alertas críticos em < 27,0 °C e > 39,0 °C (com flag anti-spam).
- Detecção contínua de falha de energia (chave no GPIO 21) e modo nobreak.
- Simulação completa de telemetria e e-mail no Monitor Serial.

---

### 8. PLANO E CASOS DE TESTE (Conferência)
Ambiente: Wokwi (ESP32 + DHT22 + LEDs + Slide Switch)  
Biblioteca necessária: DHT sensor library  

| ID Caso | Critério | Requisitos | Cenário | Como testar | Resultado esperado | Status |
|---------|----------|------------|---------|-------------|--------------------|--------|
| **CT-01** | CA01 | RF01, RNF01, RNF02 | Ciclo de leitura | Iniciar simulação e observar timestamps | Nova telemetria a cada 5 s | [x] |
| **CT-02** | CA03 (mín) | RF04 | Aquecedor | Ajustar DHT22 para 36,0 °C | LED vermelho (GPIO 18) aceso | [x] |
| **CT-03** | CA03 (máx) | RF04 | Resfriador | Ajustar DHT22 para 38,5 °C | LED azul (GPIO 19) aceso | [x] |
| **CT-04** | CA05 | RF05 | Faixa ideal | Ajustar para 37,8 °C | Ambos LEDs apagados | [x] |
| **CT-05** | CA02 | RF02, RF03 | Crítico alto | Ajustar para 40,5 °C | Bloco de e-mail “TEMPERATURA CRITICA ALTA” | [x] |
| **CT-06** | CA02 | RF02, RF03 | Crítico baixo | Ajustar para 25,0 °C | Bloco de e-mail “TEMPERATURA CRITICA BAIXA” | [ ] |
| **CT-07** | CA06 | RF02, RF03, RNF01 | Falha NaN | Desconectar fio SDA ou forçar NaN | Erro + atuadores OFF + alerta hardware | [ ] |
| **CT-08** | CA04 | RNF07 | Queda de energia | Comutar chave para GND | Mensagem nobreak + controle continua | [x] |

---

### 9. REGISTRO DA IA / AUDITORIA
- Prompt padrão do guia (especificações + regras de não inventar funcionalidades) foi utilizado como base.
- Código gerado e revisado manualmente para garantir:
  - Pinos idênticos ao RNF03/RNF04/RNF07.
  - Limites térmicos exatos (37,5 / 38,0 / 27,0 / 39,0).
  - Tratamento de NaN e modo nobreak.
  - Nenhum requisito extra além do especificado.
- Correções realizadas: ajustes de mensagens de log para coincidir com os CAs e inclusão de flag anti-spam de e-mail.

---

### 10. COMO RODAR NO WOKWI
1. Novo projeto ESP32.
2. Colar o conteúdo de `circuito.json` na aba diagram.json.
3. Colar o código de `test-code.ino` na aba sketch.
4. Adicionar biblioteca **DHT sensor library**.
5. Abrir Monitor Serial (115200 baud) e iniciar a simulação.
6. Testar cada CT da tabela acima alterando o DHT22 e a chave deslizante.

---

**Arquivos entregues pela equipe:**
- `test-code.ino` (código completo comentado)
- `circuito.json` (diagrama Wokwi pronto)
- `README.md` (guia de montagem + plano de testes detalhado)

Este documento consolida a especificação, a arquitetura, os requisitos, os critérios de aceitação e a conferência a partir dos artefatos desenvolvidos, seguindo o método de Desenvolvimento Guiado por Especificação (SDD) apresentado no guia.
