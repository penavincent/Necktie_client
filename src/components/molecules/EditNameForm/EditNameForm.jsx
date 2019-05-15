import React from 'react'

const EditProjectForm = ({ handlerFunction, className, activeEditForm, editFormActivation, inputValue, changeInputValue }) => {
return (
  <form 
  className={className}
  onSubmit={(e) => {
    handlerFunction(e, inputValue)
    editFormActivation(e)
    changeInputValue('')
  }}
  >
    {activeEditForm ?
      <React.Fragment> 
        <input 
          type="text" 
          placeholder="New Name"
          onChange={(e) => changeInputValue(e.target.value)} 
          value={inputValue}
        />
        <button type="submit">Edit Name</button>
      </React.Fragment>
    : 
    <button onClick={(e) => editFormActivation(e)}>
    Edit Name
    </button>}
  </form>
)
}

export default EditProjectForm