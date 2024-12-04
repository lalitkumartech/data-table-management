import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const rows = [
    {
        personID: 1,
        fullName: "Kate Shein",
        height: "1.79m",
        eyeColor: "red",
        
    },
    //....remaining objects for the 2nd to 14th person
    {
        personID: 15,
        fullName: "Isabella Thompson",
        height: "1.79m",
        eyeColor: "blue",
    },
    {
        personID: 1,
        fullName: "Kate Shein",
        height: "1.79m",
        eyeColor: "blue",
    },
    //....remaining objects for the 2nd to 14th person
    {
        personID: 15,
        fullName: "Isabella Thompson",
        height: "1.79m",
        eyeColor: "blue",
    },
    {
        personID: 1,
        fullName: "Kate Shein",
        height: "1.79m",
        eyeColor: "blue",
    },
    //....remaining objects for the 2nd to 14th person
    {
        personID: 15,
        fullName: "Isabella Thompson",
        height: "1.79m",
        eyeColor: "blue",
    },
    {
        personID: 1,
        fullName: "Kate Shein",
        height: "1.79m",
        eyeColor: "blue",
    },
    //....remaining objects for the 2nd to 14th person
    {
        personID: 15,
        fullName: "Isabella Thompson",
        height: "1.79m",
        eyeColor: "blue",
    },
    {
        personID: 1,
        fullName: "Kate Shein",
        height: "1.29m",
        eyeColor: "blue",
    },
    //....remaining objects for the 2nd to 14th person
    {
        personID: 15,
        fullName: "Isabella Thompson",
        height: "1.79m",
        eyeColor: "blue",
    },
    {
        personID: 1,
        fullName: "Kate Shein",
        height: "1.29m",
        eyeColor: "blue",
    },
    //....remaining objects for the 2nd to 14th person
    {
        personID: 15,
        fullName: "Isabella Thompson",
        height: "1.79m",
        eyeColor: "blue",
    },
    {
        personID: 1,
        fullName: "Kate Shein",
        height: "1.29m",
        eyeColor: "blue",
    },
    //....remaining objects for the 2nd to 14th person
    {
        personID: 15,
        fullName: "Isabella Thompson",
        height: "1.79m",
        eyeColor: "blue",
    },
    {
        personID: 1,
        fullName: "Kate Shein",
        height: "1.29m",
        eyeColor: "blue",
    },
    //....remaining objects for the 2nd to 14th person
    {
        personID: 15,
        fullName: "Isabella Thompson",
        height: "1.79m",
        eyeColor: "blue",
    },
    {
        personID: 1,
        fullName: "Kate Shein",
        height: "1.29m",
        eyeColor: "blue",
    },
    //....remaining objects for the 2nd to 14th person
    {
        personID: 15,
        fullName: "Isabella Thompson",
        height: "1.79m",
        eyeColor: "blue",
    },
];

function Table() {
    const [data, setData] = useState(rows);

    const columns = [
        {
            name: 'ID',
            selector: (row) => row.personID,
            sortable: true,
             width: "150px",
           
        },
        {
            name: 'Full Name',
            selector: (row) => row.fullName,
            sortable: true,
            width: "250px",
        },
        {
            name: 'Height',
            selector: (row) => row.height,
            sortable: true,
            width: "250px",
        },
        {
            name: 'Eye Color',
            selector: (row) => row.eyeColor,
            sortable: true,
            width: "250px",
        },
    ];

    const handleSearch = (e) => {
        
        const searchValue = e.target.value.toLowerCase();
        const filteredRows = rows.filter((row) => {
            return (
                row.personID.toString().toLowerCase().includes(searchValue) ||
                row.fullName.toLowerCase().includes(searchValue) ||
                row.height.toLowerCase().includes(searchValue) ||
                row.eyeColor.toLowerCase().includes(searchValue)
            );
        });
        setData(filteredRows);
    };

    return (
        <>
           <div className="container">
    <div className='row'>
        <div className='col-12 col-md-8'>
            <input
                type="search"
                className="form-control-sm border ps-3"
                placeholder="Search"
                onChange={handleSearch}
            />
            <DataTable 
               tableStyle={{ width: '100%' }}
               columns={columns}
               data={data}
               fixedHeader
               title="React-Data-Table-Component Tutorial."
               pagination
               selectableRows
            />
        </div>
    </div>
</div>

        </>
    );
}

export default Table;
