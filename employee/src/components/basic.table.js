// src/components/sorting.table.js
import React from "react";

import { useTable, useSortBy } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy
    )

    // Render the UI for your table
    return (
        <div>
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                // Add the sorting props to control sorting. For this example
                                // we can add them into the header props
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {/* Add a sort direction indicator */}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' '
                                                : ' '
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(
                        (row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        )
                                    })}
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
            <br />
            <div>Showing the first 20 results of {rows.length} rows</div>
        </div >
    )
}

function SortingTableComponent() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName',
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName',
                    },
                ],
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Email',
                        accessor: 'Email',
                    },
                    {
                        Header: 'Office Number',
                        accessor: '',
                    },
                    {
                        Header: 'Mobile',
                        accessor: 'status',
                    },
                    {
                        Header: 'Profile Picture',
                        accessor: 'progress',
                    },
                ],
            },
        ],
        []
    )

    const data = [
        {
            "firstName": "committee-c15dw",
            "lastName": "editor-ktsjo",
            "age": 3,
            "visits": 46,
            "progress": 75,
            "status": "relationship"
        },
        {
            "firstName": "midnight-wad0y",
            "lastName": "data-7h4xf",
            "age": 1,
            "visits": 56,
            "progress": 15,
            "status": "complicated"
        },
        {
            "firstName": "tree-sbdb0",
            "lastName": "friendship-w8535",
            "age": 1,
            "visits": 45,
            "progress": 66,
            "status": "single"
        },
        {
            "firstName": "chin-borr8",
            "lastName": "shirt-zox8m",
            "age": 0,
            "visits": 25,
            "progress": 67,
            "status": "complicated"
        },
       ]
    console.log(JSON.stringify(data));


    return (
        <Table columns={columns} data={data} />
    )
}

export default SortingTableComponent;