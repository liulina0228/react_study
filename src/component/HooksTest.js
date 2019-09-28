import React, { Component, useState} from 'react';
function HooksTest(params) {
    // useState 会返回数组，包括状态和维护状态的函数hook-为name初识值
    // 可以创建多个useState
    const [name, setName] = useState('hook');
    const [fruit, setFruit] = useState('草莓');
    const [fruits, setFruits] = useState(['草莓','香蕉']);
    function FruitsList(params) {
        return (<ul>
            {params.fruits.map((item,index) => 
                <li key={index} onClick={() => {
                    params.onselectFruit(item)
                }}>{item}</li>
            )}
        </ul>)
    }
    function FruitAdd(params) {
        const [fname, setFname] = useState('');
        const onAddFruit = (e) => {
            if (e.key === 'Enter') {
                params.onAdd(fname);
                setFname('')
            }
        }
        return (<div>
            <input type="text" value={fname} onChange={(e) => {
                setFname(e.target.value)
            }} onKeyDown={onAddFruit}/>
        </div>)
    }
    return <div onClick= {()=>{
        setName('开课吧')
    }}>Hello {name}
        <p>{
            fruit === '' ? '请选择喜欢的水果': `你选择的水果是${fruit}`
        }</p>
        <FruitsList fruits={fruits} onselectFruit={setFruit} ></FruitsList>
        <FruitAdd 
            onAdd={(name) => {setFruits([...fruits,name])}}></FruitAdd>
    </div>
}
export default HooksTest;