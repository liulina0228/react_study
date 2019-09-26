import React from 'react';
import ReactDOM from 'react-dom';
import TestClass from './TestClass.js'
import Welcome from './component/fComp.js'
import TestHandle from './component/TestHandle.js'
import pic from './logo.svg'
// 引入css
import './css/index.css'
// 引入模块化css
import myMo from'./css/index.module.css'
import classNames from 'classnames'



function tick () {
    const ele = <div>{new Date().toLocaleTimeString()}</div>;
    // 动态渲染
    ReactDOM.render(ele, document.getElementById('root'));
}
// tick();

// setInterval(tick, 1000)
// 判断条件语句不能在jsx中语句中使用，但是可以放在jsx语句以外
// if 语句 
const isShow = true; 
let jsx;
// if (isShow) {
//     jsx = <p>我喜欢react true</p>
// } else {
//     jsx = <p>我喜欢react false</p>
// }
// 三目运算符
jsx = isShow ? <p>我喜欢react true</p> : jsx = <p>我喜欢react false</p>;

// 逻辑与
// 如果前面的判断条件为真，则直接将后面的内容展示
jsx = isShow && <p>我喜欢react true</p>

// 循环语句
const arr = [1,2,3,4,5];
jsx = arr.map((item) => <p key="item">{item}</p>);

// react 样式
// 直接写样式
// ReactDOM.render(<img src={pic} alt="图片" style={{width: 200, height:200}}/>, document.getElementById('root'));
const styles = {
    width: '200px',
    height: '200px',
    border: 'solid 1px '
}
// ReactDOM.render(<img src={pic} alt="图片" style={styles}/>, document.getElementById('root'));
// 引入样式
// ReactDOM.render(<img src={pic} alt="图片" className="myWidth myHeight"/>, document.getElementById('root'));
// 模块化样式
// ReactDOM.render(<img src={pic} alt="图片" className={`${myMo.myWidth} ${myMo.myHeight}`}/>, document.getElementById('root'));
// styled-jsx---暂时还没有试验  https://github.com/zeit/styled-jsx
//// styled-Components---暂时还没有试验  https://github.com/styled-components/styled-components
// ReactDOM.render(<img src={pic} alt="图片" className={classNames('myWidth','myHeight')}/>, document.getElementById('root'));
// ReactDOM.render(<img src={pic} alt="图片" className={classNames({
//     myWidth: true,
//     myHeight: true
//   })}/>, document.getElementById('root'));



// ReactDOM.render(
//     <Welcome name={'郄海亮'} name2="郄海亮1" arrList={[1,2,3]} obj={{item: 1}}
//     />, document.getElementById('root'));
ReactDOM.render(
    <div>
        <TestHandle/>
        <TestClass name='class Comp'></TestClass>
    </div>
, document.getElementById('root'))
