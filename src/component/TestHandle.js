import React, { Component } from 'react';
// 事件处理
// 事件命名为小驼峰，而不会纯小写
// 使用jsx语法时需要传入一个函数，而不是字符串
class TestHandle extends Component {
    constructor(props) {
        super()
        this.state = {
            name: '',
            age: 4
        }
        // 4.官方建议绑定this，this.handleTest = this.handleTest.bind(this, 参数)
        this.handleTest = this.handleTest.bind(this)
    }
    clickFn() {

    }

    // 正确获取this
    // 1.箭头行数
    /* changeHandle = (e) =>{
        this.setState({
            name : e.target.value
        })
    } */
    // 2.如果直接调用获取不到this，使用箭头函数调用
    changeHandle(e) {
        this.setState({
            name : e.target.value
        })
    }
    // 3.绑定this，onClick={this.handleTest.bind(this)}
    handleTest() {
        this.setState({
            age: this.state.age + 1
        })
    }
    render() { 
        return ( <div onClick={this.handleTest}>
            <input
                type="text"
                value={this.state.name}
                // onChange={this.changeHandle}
                // 另外一种箭头函数
                onChange= { (e) => this.changeHandle(e)}
            /> {this.state.name}
            <p>{this.state.age}</p>
        </div> );
    }
}
 
export default TestHandle;