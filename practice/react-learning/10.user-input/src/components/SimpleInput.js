import useInput from '../hooks/use-input'

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== '')

  const {
    value: enteredAge,
    isValid: ageIsValid,
    hasError: ageInputHasError,
    valueChangeHandler: ageChangeHandler,
    valueBlurHandler: ageBlurHandler,
    reset: ageReset,
  } = useInput((value) => 99 > value > 0 && value.trim() !== '')

  let formIsValid = ageIsValid && nameIsValid

  const formSubmissionHandler = (event) => {
    event.preventDefault()
    if (!nameIsValid && !ageIsValid) {
      return
    }

    console.log(enteredName, enteredAge)
    nameReset()
    ageReset()
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const ageInputClasses = ageInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      <div className={ageInputClasses}>
        <label htmlFor='age'>Your Age</label>
        <input
          type='number'
          id='age'
          max='99'
          min='0'
          step='1'
          onChange={ageChangeHandler}
          onBlur={ageBlurHandler}
          value={enteredAge}
        />
        {ageInputHasError && (
          <p className='error-text'>Age must be greater than 0 and less than 99</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
