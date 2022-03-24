import React from 'react';

class UsersCurrentReq extends React.Component {
    render() {
        return (
                <div className='requests'>
                    <div className='abovetable'>
                        <h2 className='justify_start'>Own requests</h2>
                        <button className='above_button'>New request</button>
                        <button className='above_button'>Inbox</button>
                    </div>
                    <table className='table'>
                        <tr className='tablehead'>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Subject</th>
                            <th>Second examiner</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>22.05.22</td>
                            <td>22.06.22</td>
                            <td>Advanced CSS</td>
                            <td>None yet</td>
                            <td>•••</td>
                        </tr>
                        <tr>
                            <td>02.06.22</td>
                            <td>22.05.22</td>
                            <td>Basics of HTML</td>
                            <td>None yet</td>
                            <td>•••</td>
                        </tr>
                    </table>
                </div>
        )
    }
}

export default UsersCurrentReq;

