import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

	//对接收的props进行类型限制
	static propTypes = {
		addTodo:PropTypes.func.isRequired
	}
	getNowDate = () => { 
		const nowTime = new Date(Date.now())
		let month = nowTime.getMonth() + 1
		let day = nowTime.getDate()
		if((month)<10)
		month = ' ' + month
		if(day<10)
		day = ' ' + day
		return nowTime.getFullYear() + '年' + month + '月' + day + '日'
	 }
	//键盘事件的回调
	handleKeyUp = (event)=>{
		const {keyCode,target} = event


		if(keyCode !== 13) return
		if(target.value.trim() === ''){
			alert('输入不能为空')
			return
		}
		const todoObj = {id:nanoid(),name:target.value,time:this.getNowDate(),done:false}
		this.props.addTodo(todoObj)
		target.value = ''
	}

	render() {
		return (
			<div className="todo-header">
				<input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
			</div>
		)
	}
}