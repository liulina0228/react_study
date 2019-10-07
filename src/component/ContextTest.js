import React, { Component } from 'react';
// 这个事配对使用  Context - Provider, Consumer
const Context = React.createContext({counter: 0});
const Context2 = React.createContext({name: '0'});
const {Provider, Consumer} = Context;
const {Provider2, Consumer2} = Context2;
// 利用HOC改造这个consumer
// withConsumer是高阶工厂，他可以根据配置返回一个高阶组件
// es5写法
// function withConsumer(Consumer) {
    // 接收组件
//     return function (Comp) {
    // 返回组件
//         return function(props){
//             return (
//                 <Consumer>
//                     {value => <Comp {...value}></Comp>}
//                 </Consumer>
//             )
//         }
//     }
// }
// es6写法
function withConsumer(Consumer) {
    // 注意这里的Copm是组件所以首字母必须大写
    return Comp => props => {
        return (
            <Consumer>
                {value => <Comp {...value}></Comp>}
            </Consumer>
        )
    }
}
const Child1 = withConsumer(Consumer)(function(props) {
    return (
        <div onClick={() => {
            props.add()
        }}>{props.counter}</div>
    );
})
function Child(params) {
    return <div onClick={() => {
        params.add()
    }}>{params.counter}</div>
}
class Text extends Component {
    constructor(props) {
        super()
        this.state = {
            counter: 88
        }
    }
    add = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };
    render() { 
        return (
            // 当不存在provider的时候会直接用到默认值React.createContext({counter: 0})
            <Provider value={{counter: this.state.counter, add: this.add}}>
            {/* 接收一个函数 */}
                <Consumer>
                    {value => <Child {...value}></Child>}
                </Consumer>
                <Consumer>
                    {value => <Child {...value}></Child>}
                </Consumer>
                <Child1></Child1>
                <Child1></Child1>
                <Child1></Child1>
            </Provider>
         );
    }
}
 
export default Text;