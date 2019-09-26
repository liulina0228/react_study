import React from 'react'

export default function Welcome(params) {
    // 属性值可以是字符串，花括号，数组，对象，事件，不建议对属性修改
    // 必须返回唯一的包裹标签
    // return <h1>hello {params.name}</h1>
    // 1.通过数组可以返回没有根的元素
    // return [<h1>hello {params.name}</h1>, <h1>hello {params.name2}</h1>]
    // 2.通过 React.Fragment可以写兄弟元素，显式需要写key
    return <React.Fragment> <h1>hello {params.name}</h1><h1>hello {params.name2}</h1></React.Fragment>
    //  简写fragment
    // return <> <h1>hello {params.name}</h1><h1>hello {params.name2}</h1></>
}
