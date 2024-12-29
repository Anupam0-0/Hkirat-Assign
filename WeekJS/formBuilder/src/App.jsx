import React, { useContext } from 'react'
import { InputContext } from './FormContext'


const App = () => {
  return (
    <div>
      <h1 className='text-4xl py-4 text-center  font-bold text-blue-500'>Form Builder </h1>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-2 justify-center m-4'>
          {/*  Creator */}
          <div className='w-full lg:w-1/2  border rounded p-4 shadow-sm'>
          <Creator />
          </div>

          {/*  Preview */}
          <div className='w-full lg:w-1/2 border rounded p-4'>
          <Preview />
          </div>

        </div>
    </div>
  )
}

export default App


function Creator(){


  const { input, setInput } = useContext(InputContext);

  const handleSubmit = (e) => {
    // Add this line
    e.preventDefault()
    setInput([...input, {fieldType: e.target.fieldType.value, fieldLabel: e.target.fieldLabel.value}])
    console.log('Form submitted', e.target.fieldType.value, e.target.fieldLabel.value)
  }

  return (
    <div className=''>
      <h2 className='text-2xl font-bold text-blue-500 text-center'>Creator</h2>
      <form className='flex flex-col px-4 ' onSubmit={handleSubmit}>
        <label className='text-2xl py-2 '> Select Field Type </label>
        <select name='fieldType' className='p-3 border bg-slate-50 rounded outline-none' >
          <option value=''>Select Field Type</option>
          <option value='text'>Text</option>
          <option value='email'>Email</option>
          <option value='number'>Number</option>
          <option value='date'>Date</option>
          <option value='color'>Color</option>
        </select>

        <label className='text-2xl py-2'> Field Label </label>
        <input type='text' name='fieldLabel' className='p-2 text-lg px-4 border rounded outline-none' placeholder='label'/>
        <button type='submit' className='bg-blue-600 shadow-md active:scale-95 active:bg-blue-700 text-white px-4 py-2.5 rounded mt-10 mb-4'>
          Add Field
        </button>
      </form>      
    </div>
  )
}

function Preview(){

  const { input } = useContext(InputContext);

  return (
    <div>
      <h2 className='text-2xl font-bold text-blue-500 text-center'>Preview</h2>
      <div className='flex flex-col gap-4 my-5'>
        {input.map((field, index) => (
          <div key={index} className='px-5'>
            <label className='text-lg font-bold text-slate-900'>{field.fieldLabel} &nbsp;</label>
            <input type={field.fieldType} className='px-2 py-1 text-lg my-1 w-full border rounded outline-none'/>
          </div>
        ))}
      </div>
      
    </div>
  )
}