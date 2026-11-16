import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';

@Controller('calculadora')
export class CalculadoraController {
    constructor(private readonly calculadoraService: CalculadoraService){}

    @Get('somar')
    somar(@Query('a', ParseIntPipe) a: number, @Query('b', ParseIntPipe) b: number) {
        const resultado = this.calculadoraService.somar(a,b);
        return { resultado };
    }

    @Get('subtrair')
    subtrair(@Query('a', ParseIntPipe) a: number, @Query('b', ParseIntPipe) b: number) {
        const resultado = this.calculadoraService.subtrair(a,b);
        return { resultado };
    }
    
    @Get('multiplicar')
    multiplicar(@Query('a', ParseIntPipe) a: number, @Query('b', ParseIntPipe) b: number) {
        const resultado = this.calculadoraService.multiplicar(a,b);
        return { resultado };
    }
    
    @Get('dividir')
    dividir(@Query('a', ParseIntPipe) a: number, @Query('b', ParseIntPipe) b: number) {
        const resultado = this.calculadoraService.dividir(a,b);
        return { resultado };
    }
}