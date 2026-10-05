/* Código ajustado para as boas práticas do typescript, com o auxílio da IA, seguindo o mesmo intuíto 
dos exercícios anteriores. */

class Musica {
    constructor(public readonly titulo: string, public readonly duracaoSeg: number){}
}

class Ouvinte {
    constructor(public readonly nome: string, public readonly plano: string){}
}

class Playlist {
    constructor(protected readonly nome: string, protected readonly musicas: Musica[]){}

    public duracaoTotal(): number {
        return this.musicas.reduce((total, m) => total + m.duracaoSeg, 0)
    }

    public descricao(): string {
        return `${this.nome} - ${this.musicas.length} musicas`
    }

    public tocarPara(ouvinte: Ouvinte): string {
        if (ouvinte.plano === 'premium'){
            return `${ouvinte.nome} ouve ${this.nome} sem anúncios`
        }
        
        if (ouvinte.plano === 'gratis') {
            return `${ouvinte.nome} ouve ${this.nome} com anúncios`
        }
        
        return `Plano não identificado.`
    }
}

class PlaylistPublica extends Playlist {
    constructor(nome: string, musicas: Musica[], private curtidas: number){super(nome, musicas)}

    public override descricao(): string {
        return super.descricao() + ` - ${this.curtidas} curtidas`
    }
}

class PlaylistPessoal extends Playlist {
    constructor(nome: string, musicas: Musica[], private dono: string){super(nome, musicas)}

    public override descricao(): string {
        return super.descricao() + ` - de ${this.dono}`
    }
}

const listaMusicas: Musica[] = [
    new Musica("Mensagem do Além", 209.4),
    new Musica("A Carta", 246),
    new Musica("Viva a Vida!", 201),
    new Musica("Amargurado", 182.4),
    new Musica("Só da você na minha vida", 182.4),
    new Musica("Comitiva Esperaça", 208.2)
]

const playlistPublica = new PlaylistPublica("Modas", listaMusicas.slice(0,5), 1200)
const playlistPessoal = new PlaylistPessoal("Minhas Músicas", listaMusicas.slice(2,6), "Thiago")

const listaPlaylists: Playlist[] = [playlistPublica, playlistPessoal]

for (const playlist of listaPlaylists){
    console.log(playlist.descricao())
    console.log("--> Duração: ",playlist.duracaoTotal().toFixed(0), "segundos\n")
}

const ouvintePago: Ouvinte = new Ouvinte("Thiago", "premium")
const ouvinteGratis: Ouvinte = new Ouvinte("João", "gratis")

console.log (playlistPublica.tocarPara(ouvintePago))
console.log (playlistPublica.tocarPara(ouvinteGratis))

// ==================================================================================
// ------ Código desenvolvido ------

// class Musica {
//     constructor(public titulo: string, public duracaoSeg: number){}
// }

// class Ouvinte {
//     constructor(public nome: string, public plano: string){}
// }

// class Playlist {
//     constructor(protected nome: string, protected musicas: Musica[]){}

//     public duracaoTotal(): number {
//         let total = 0
//         for(const musica of this.musicas){
//             total += musica.duracaoSeg
//         }

//         return total
//     }

//     public descricao(): string {
//         return `${this.nome} - ${this.musicas.length} musicas`
//     }

//     public tocarPara(ouvinte: Ouvinte): string {
//         if (ouvinte.plano === 'premium'){
//             return `${ouvinte.nome} ouve ${this.nome} sem anúncios`
//         } else if (ouvinte.plano === 'gratis') {
//             return `${ouvinte.nome} ouve ${this.nome} com anúncios`
//         } else {
//             return `Plano não identificado.`
//         }
//     }
// }

// class PlaylistPublica extends Playlist {
//     constructor(nome: string, musicas: Musica[], private curtidas: number){super(nome, musicas)}

//     public override descricao(): string {
//         return super.descricao() + ` - ${this.curtidas} curtidas`
//     }
// }

// class PlaylistPessoal extends Playlist {
//     constructor(nome: string, musicas: Musica[], private dono: string){super(nome, musicas)}

//     public override descricao(): string {
//         return super.descricao() + ` - de ${this.dono}`
//     }
// }

// const listaMusicas: Musica[] = [
//     new Musica("Mensagem do Além", 209.4),
//     new Musica("A Carta", 246),
//     new Musica("Viva a Vida!", 201),
//     new Musica("Amargurado", 182.4),
//     new Musica("Só da você na minha vida", 182.4),
//     new Musica("Comitiva Esperaça", 208.2)
// ]

// const playlistPublica = new PlaylistPublica("Modas", [listaMusicas[0], listaMusicas[1], 
// listaMusicas[2], listaMusicas[3]], 1200)

// const playlistPessoal = new PlaylistPessoal("Minhas Músicas", [listaMusicas[0], listaMusicas[2], 
// listaMusicas[3], listaMusicas[4], listaMusicas[5]], "Thiago")

// const listaPlaylists: Playlist[] = [playlistPublica, playlistPessoal]
// for (const playlist of listaPlaylists){
//     console.log(playlist.descricao())
//     console.log("--> Duração: ",playlist.duracaoTotal().toFixed(0), "segundos\n")
// }

// const ouvintePago: Ouvinte = new Ouvinte("Thiago", "premium")
// const ouvinteGratis: Ouvinte = new Ouvinte("João", "gratis")

// console.log (playlistPublica.tocarPara(ouvintePago))
// console.log (playlistPublica.tocarPara(ouvinteGratis))