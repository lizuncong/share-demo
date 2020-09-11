import React from 'react';

const Index = ({ count }) => {
    console.log('counter')
    return (
        <div>
            计数器{count}
            <div
                onClick={() => {
                    alert('count:' + count)
                }}
            >
                click me
            </div>
            <div>
                test
            </div>
        </div>
    )
}


export default Index
