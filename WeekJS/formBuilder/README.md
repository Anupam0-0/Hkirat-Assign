![alt text](image.png)


Things I learned:
    - how to put data into variables for useState
    - new implementation of useState (how it can be used)
    - getting more familiar with useContext (still noob in it)
    - this part is the highlight
     ```   const handleSubmit = (e) => {
            // Add this line
            e.preventDefault()
            setInput([...input, {fieldType: e.target.fieldType.value, fieldLabel: e.target.fieldLabel.value}])
            console.log('Form submitted', e.target.fieldType.value, e.target.fieldLabel.value)
        }```

    -and the logic of preview
        function Preview(){

```  const { input } = useContext(InputContext);

  return (
    <div>
      <h2>Preview</h2>
      <div >
        {input.map((field, index) => (
          <div key={index}>
            <label>{field.fieldLabel} &nbsp;</label>
            <input type={field.fieldType}/>
          </div>
        ))}
      </div>
      
    </div>
  )
}````