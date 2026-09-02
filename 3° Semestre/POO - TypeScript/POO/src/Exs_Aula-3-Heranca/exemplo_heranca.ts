class ClasseBase {
    public x: number = 10;
    protected y: number = 20;
    private z: number = 30;
}

class ClasseDerivada extends ClasseBase {
    public mostrarAtributos() {
        console.log(this.x);
        console.log(this.y);
        // console.log(this.z); <= z é privado e somente assecível na classe base
    }
}

let obj = new ClasseDerivada();

obj.mostrarAtributos();

console.log(obj.x);
// console.log(obj.y); <= y é protegiso e somente assecível na classe base
// console.log(obj.z); <= z é privado e somente assecível na classe base