import { Emprestavel, Baixavel, LivroFisico, Ebook } from './itens';

function atenderNoBalcao(item: Emprestavel): void {
  console.log(item.emprestar());
}
function atenderNoSite(item: Baixavel): void {
  console.log(item.baixar());
}

atenderNoBalcao(new LivroFisico('Dom Casmurro'));
atenderNoSite(new Ebook('1984'));