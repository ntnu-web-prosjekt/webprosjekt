import React from 'react';

class Statistics extends React.Component {
    render() {
        return (
            <div id='statistics'>
                <p className='heading'>ExamMatcher makes it easy to find a second examiner for your exams!</p>
                <a href="test" id='info'>More info about this project</a>
                <div id='statbox-container'>
                    <div className='statbox'>
                        <p className='stattype'>Open requests</p>
                        <p className='statvalue'>155</p>
                        </div>
                    <div className='statbox'>
                        <p className='stattype'>Matched requests</p>
                        <p className='statvalue'>89</p>
                        </div>
                </div>
            </div>
        )
    }
}

export default Statistics