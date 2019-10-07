import React, { Component } from 'react';
// 这个事配对使用  Context - Provider, Consumer
const Context = React.createContext({counter: 0});


function Child(params) {
    return <div onClick={() => {
        params.add()
    }}>{params.counter}</div>
}
class TypeChild extends Component{
    render() {
        return <div>{this.context.counter}</div>
    }
    
}
// 2.contextType的使用Api
TypeChild.contextType = Context;
// 3.实验室语法
class LibraryChild extends Component{
    static contextType = Context;
    render() {
        return <div>{this.context.counter}</div>
    }
    
}
class Text extends Component {
    constructor(props) {
        super()
        this.state = {
            counter: 1
        }
    }
    add = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };
    render() { 
        return (
            <div>
            {/*1.Api直接使用*/}
            <Context.Provider value={{counter: this.state.counter, add: this.add}}>
            {/* 接收一个函数 */}
                <Context.Consumer>
                    {value => <Child {...value}></Child>}
                </Context.Consumer>
                <Context.Consumer>
                    {value => <Child {...value}></Child>}
                </Context.Consumer>
            </Context.Provider>
            <TypeChild></TypeChild>
            <LibraryChild></LibraryChild>
            </div>
         );
    }
}
 
export default Text;