import React from 'react';

const Employee = ({ employee, index }) => {
    const { name, position, salary, status } = employee;

    return (
        <tr>
            <td>{index}</td>
            <td>{name}</td>
            <td>{position}</td>
            <td>{status === 'Active' ? salary : '-'}</td>
            <td>{status}</td>
        </tr>
    );
};

export default Employee;
