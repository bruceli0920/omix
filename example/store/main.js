import Omi from '../../src/index.js'
import TodoApp from './todo-app.js'
import Store from './store.js'


let app = new TodoApp()
let store = new Store({
    items: [
        {id: 1, text: 'Omi'},
        {id: 2, text: 'AlloyTeam'}
    ],
    text: ''
},{
    add: (text)=>{
        //这里可以注入动画特效或其他逻辑再进行app.update。灵活方便
        setTimeout(()=>{
            app.update()
        },1000)

    }
})



Omi.render(app, 'body', {
    store
})
