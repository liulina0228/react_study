import React, { Component } from 'react';
class LifeCircle extends Component {
    constructor(props) {
        super(props);
        this.state = { type: '' };
        this.listRef = React.createRef();
    }
    // 新增的生命周期
    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps,prevState)
        const {type} = nextProps;
        // type可能由props驱动，也可能由state驱动，这样判断会导致state驱动的type被回滚
        if (type !== prevState.type) {
            return {
                type,
            };
        }
        // 否则，对于state不进行任何操作
        return null;
    }
    /* componentDidMount () {
        setTimeout(()=>{
            this.setState({'type': 'loaded'})
        },1000)
    } */
    // 这个生命周期要和componentDidUpdate配合使用
    // 这个方法在render之后，在componentDidUpdate之前调用
    getSnapshotBeforeUpdate(prevProps, prevState) {
        //我们是否要添加新的 items 到列表?
        // 捕捉滚动位置，以便我们可以稍后调整滚动.
        if (prevProps.list.length < this.props.list.length) {
        const list = this.listRef.current;
        return list.scrollHeight - list.scrollTop;
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        //如果我们有snapshot值, 我们已经添加了 新的items.
        // 调整滚动以⾄于这些新的items 不会将旧items推出视图。
        // (这边的snapshot是 getSnapshotBeforeUpdate⽅法的返回值)
        if (snapshot !== null) {
            const list = this.listRef.current;
            list.scrollTop = list.scrollHeight - snapshot;
        }
    }
    
    render() { 
        return ( 
            <div>
                <h1>wo shi CircleLife</h1>
                <div ref={this.listRef}>{
                    this.props.list.map((item, index)=>{
                        return <p key={index}>{item}</p>
                    })
                }</div>
            </div>
        )
    }
}
 
export default LifeCircle;