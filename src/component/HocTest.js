import React, { Component } from 'react';
// 高阶组件： 一种复用组件逻辑的一种高级技巧，它是基于React的组合特性而形成的设计模式
// 实质是一个工厂函数，参数为组件，返回值为新组件的函数
const lessons = [
    { stage: "React", title: "核⼼API" },
    { stage: "React", title: "组件化1" },
    { stage: "React", title: "组件化2" }
   ];
//    接收一个组件返回一个组件
const withLesson = Comp => props => {
    const content = lessons[props.index];
    return <Comp {...content}></Comp>
}
function Lesson (props) {
    return (
        <div>{
            props.stage 
        } --- {props.title}</div>
    )
}
const LessonWithContent = withLesson(Lesson);
class HocTest extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( <div>HOC
            <LessonWithContent index={1}></LessonWithContent>
        </div> );
    }
}
 
export default HocTest;