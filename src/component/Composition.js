import React, { Component } from 'react';
function Dialog(props) {
    // children 相当于匿名插槽 props.children 是对象
    return <div style={{border: "1px solid blue"}}>{props.children}</div>
}
function Nameddialog(props) {
    //相当于具名插槽
    return (
        <div style={{border: "1px solid blue"}}>
            <div>{props.children.title}</div>
            <span>--------------------------------</span>
            <div>{props.children.content}</div>
        </div>
    );
}
function Scopedialog(props) {
    //相当于作用域插槽
    const message = {
        foo: {title: 'foo', content:'fooContent'},
        bar: {title: 'bar', content:'barContent'}
    }
    const {title, content} = props.children(message[props.msg])
    return (
        <div style={{border: "1px solid blue"}}>
            <div>{title}</div>
            <span>--------------------------------</span>
            <div>{content}</div>
        </div>
    );
}
//组件复合
class Composition extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Dialog>
                    <h1>标题</h1>
                    <p>内容</p>
                </Dialog>
                <Nameddialog>
                    {
                        {
                            title: '标题1',
                            content:  '内容1'
                        }
                    }
                </Nameddialog>
                <Scopedialog msg='bar'>
                    {({title, content}) => ({
                        title: title,
                        content: content
                    })}
                    
                </Scopedialog>
            </div>
            // 如果组件有子内容并且还有children属性，props.children会有优先级，
            // 会优先调用组件中的子内容
         );
    }
}
 
export default Composition;