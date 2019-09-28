import React, { Component } from 'react';
const Context = React.createContext({counter: 0});
const {Provider, Consumer} = Context;
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
            </Provider>
         );
    }
}
 
export default Text;