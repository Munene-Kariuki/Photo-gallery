import React, {useState} from 'react';

function UpdateForm({photoTitle, handleFormUpdate}) {

  const [title, setTitle] = useState(photoTitle);

  //update title
  function handleChange(event) {
    let value = event.target.value;
    setTitle(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleFormUpdate(title)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Title' type='text' name='title' onChange={handleChange} value={title} />
      <input type='submit' value='Change title' />
    </form>
  )
}

export default UpdateForm;
