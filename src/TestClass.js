import React, { Component} from "react";
import Msg from './component/StateMgt.js'

class TestClass extends Component {
    constructor (props){
       super();
       this.state = {
           date: new Date(),
           count: 0
       }
    }
    // 相当于
    /* state = {
        date: new Date(),
        count: '0'
    } */
    componentDidMount () {
        /* this.timeId = setInterval(() => {
            this.setState({
                date: new Date()
            })
        },1000) */
        // setState 更新可能是异步的，多次setState对相同的key会浅进行合并（）
        this.setState({count : this.state.count + 1})
        this.setState({count : this.state.count + 1})
        this.setState({count : this.state.count + 1})
        this.setState({count : this.state.count * 5})
        // 获得最新状态的值的方式
        // 1.让setState接受一个函数而不是对象，这个函数是用上个state作为第一个参数，
        //    将此次更新被应用时的props作为第二个参数
        this.setState((state, props) => ({
            count: state.count + 1
        }) )
        this.setState((state, props) => ({
            count: state.count + 1
        }) )
        this.setState((state, props) => ({
            count: state.count + 1
        }) )
        // 2.使用定时器
        setTimeout(() => {
            console.log(this.state.count);
        }, 0);
        // 3.使用原生事件
        document.body.addEventListener('click',this.changeValue, false);
    }
    onchange =  () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count);
    }
    changeValue = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count);
    }
    componentWillUnmount () {
        clearInterval(this.timeId);
    }
    render() {
        // return <div>                                                                                                                                                                                                          .toLocaleTimeString()}</div>
        // return <div>{this.state.count} - {this.props.name} - {this.state.date.toLocaleTimeString() }</div>
        return <div>{this.state.count}
            <Msg change= {this.onchange} count={this.state.count}></Msg>
        </div>
    }
}
// 

export default TestClass