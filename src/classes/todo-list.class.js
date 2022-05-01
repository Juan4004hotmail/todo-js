import { Todo } from "./todo.class";

export class TodoList {

    constructor(){
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ){
        this.todos = this.todos.filter( todo => todo.id != id );
        // Vamos a regresar un nuevo arreglo excluyendo (ó filtrando)
        // el Todo que coincida con ése id. 
        this.guardarLocalStorage();
    }

    marcarCompletado( id ){
        for ( const todo of this.todos ) {
            if( todo.id == id ){
                todo.completado = !todo.completado;
                this.guardarLocalStorage()
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage()
        // Va a regresar todos los que NO estén completados.
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify( this.todos ) );
        // Ésto lo que intenta hacer es transformar mi arreglo de objetos
        // en un JSON perfecto. Convertirlo en un string.
    }

    cargarLocalStorage(){

        // if ( localStorage.getItem('todo') ){
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        // } else {
        //     this.todos = [];
        // }
        // Tarea: convertir éste if else, en un operador ternario:
        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];
        this.todos = this.todos.map(obj => Todo.fromJson(obj));
    }

}

