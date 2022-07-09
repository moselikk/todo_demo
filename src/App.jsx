import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

	//初始化状态
	state = {todos:[
		{id:'001',name:'喂狗狗',time:'2022年 3月 9日',done:true},
		{id:'002',name:'水塔上满水',time:'2022年 3月 2日',done:false,},
		{id:'003',name:'百词斩',time:'2022年 2月22日',done:false},
		{id:'004',name:'买沐浴露',time:'2022年2月18日',done:true},
		{id:'005',name:'体重秤换电池',time:'2019年 8月 3日',done:false}
	]}

	//addTodo用于添加一个todo，接收的参数是todo对象
	addTodo = (todoObj)=>{
		const {todos} = this.state
		const newTodos = [todoObj,...todos]
		this.setState({todos:newTodos})
	}

	//updateTodo用于更新一个todo对象
	updateTodo = (id,done)=>{
		const {todos} = this.state
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.id === id) return {...todoObj,done}
			else return todoObj
		})
		this.setState({todos:newTodos})
	}

	//deleteTodo用于删除一个todo对象
	deleteTodo = (id)=>{
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return todoObj.id !== id
		})
		this.setState({todos:newTodos})
	}

	//checkAllTodo用于全选
	checkAllTodo = (done)=>{
		const {todos} = this.state
		const newTodos = todos.map((todoObj)=>{
			return {...todoObj,done}
		})
		this.setState({todos:newTodos})
	}

	//clearAllDone用于清除所有已完成的
	clearAllDone = ()=>{
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return !todoObj.done
		})
		this.setState({todos:newTodos})
	}

	render() {
		const {todos} = this.state
		return (
			<div className="todo-container">
				<h3>To-Do list demo</h3>
				<div className="todo-wrap">
					<Header addTodo={this.addTodo}/>
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
					<Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
				</div>
			</div>	
		)
	}
}
