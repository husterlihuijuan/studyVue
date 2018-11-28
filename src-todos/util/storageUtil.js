/*
使用localStorage储存数据的工具模块
模块可以是 一个函数或一个对象
需要向外暴露一个功能用函数，如果需要暴露多个功能用对象
*/
export default{
    saveTodos(todos){
        window.localStorage.setItem('todosKey',JSON.stringify(todos))
    },
    readTodos(){
        return JSON.parse(window.localStorage.getItem('todosKey') || '[]')
    }
}