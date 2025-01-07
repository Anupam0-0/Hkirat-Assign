import React, { useState } from 'react'

export default function App() {
    const [tableData, setTableData] = useState([]);

    return (
        <div className="w-full h-screen bg-slate-50">
            <Header />
            <Form setTableData={setTableData} tableData={tableData} />
            <Table data={tableData} />
        </div>
    )
}

function Header() {
    return (
        <div className="bg-blue-500  opacity-90 w-full p-4 text-white">
            <h1 className="text-2xl font-semibold text-center">Pet Adoption Form</h1>
        </div>
    )
}

function Form({tableData, setTableData }) {
    const [formData, setFormData] = useState({
        petName: '',
        petType: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTableData([...tableData, formData]);
        setFormData({
            petName: '',
            petType: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        });
    };

    return (
        <div className='w-full flex justify-center py-10 '>
            <form className='flex flex-col px-10 py-5 gap-3 w-[80vw] lg:w-[60vw] border' onSubmit={handleSubmit}>
                <label>Pet Name :</label>
                <input type="text" name="petName" placeholder="Pet Name..." value={formData.petName} onChange={handleChange} />
                <label>Pet Type :</label>
                <input type="text" name="petType" placeholder="Pet Type..." value={formData.petType} onChange={handleChange} />
                <label>First Name :</label>
                <input type="text" name="firstName" placeholder="First Name..." value={formData.firstName} onChange={handleChange} />
                <label>Last Name :</label>
                <input type="text" name="lastName" placeholder="Last Name..." value={formData.lastName} onChange={handleChange} />
                <label>Email :</label>
                <input type="email" name="email" placeholder="Email..." value={formData.email} onChange={handleChange} />
                <label>Phone :</label>
                <input type="tel" name="phone" placeholder="Phone..." value={formData.phone} onChange={handleChange} />
                <button className='w-full bg-emerald-600 opacity-90 py-1.5 rounded mt-3 text-slate-50' type="submit">Submit</button>
            </form>
        </div>
    );
}

function Table({ data }) {
    return (
        <div className='w-full flex justify-center py-10'>
            <table className='w-[80vw] lg:w-[60vw] border'>
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Pet Type</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.petName}</td>
                            <td>{row.petType}</td>
                            <td>{row.firstName}</td>
                            <td>{row.lastName}</td>
                            <td>{row.email}</td>
                            <td>{row.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}