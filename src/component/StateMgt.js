import React from 'react';
// 组件通信  父子通信
// props
// 状态提升，即父组件传递的是函数则可以把自组建的信息传入富组件
// context 是 快层级通信
// reduxt
export default function Msg (props) {
    return (
            <div style={{border: '1px solid'}} onClick = {props.change}>{props.count}</div>
    )
} 