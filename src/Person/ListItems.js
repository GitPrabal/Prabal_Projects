import React from 'react';
import '../../src/Person/css/login.css';

const ListItems = (props) => {
    const users = props.props;

    console.log(props.props);

    const result = users.map((result, index) => {

        var counter = index;
        counter = counter + 1;

        return (
            <tr key={index}>
                <td>{counter}</td>
                <td>{users[index].name.title}
                </td>
                <td>{users[index].name.first}</td>
                <td>{users[index].name.last}</td>
                <td><img src={users[index].picture.thumbnail} /></td>
                <td><input type="button" className="action-btn" value="Edit" />
                    &nbsp;<input type="button" className="action-btn" value="Delete" />
                </td>
            </tr>
        )

    })

    if (props.loadFlag) {
        return <div><p>Please wait...</p></div>
    } else {
        return (
            <div>
                <center>
                    <table className="width50">
                        <tbody>
                            <tr>
                                <th className="">S No.</th>
                                <th className="">Title</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>User Image</th>
                                <th>Action</th>
                            </tr>
                            {result}
                        </tbody>
                    </table></center>
            </div>
        )

    }

}

export default ListItems;
