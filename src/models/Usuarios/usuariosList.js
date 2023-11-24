export class usuarioList{
    constructor(){
        this.usuarios=[];
    }

    addUsuarios(usuario){
        this.usuarios.push(usuario)

    }

    pegarUsuariosId(id){
        return this.usuarios.filter((usuario)=> usuario.id===id)
    }

    pegarTodos(){
        return this.usuarios
    }
    
}