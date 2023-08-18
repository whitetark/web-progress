import useInput from '../hooks/use-input'

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const isEmail = (value) => value.match(emailRegex)
const isNotEmpty = (value) => value.trim() !== ''

const BasicForm = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(isNotEmpty)

  const {
    value: surname,
    isValid: surnameIsValid,
    hasError: surnameHasError,
    valueChangeHandler: surnameChangeHandler,
    valueBlurHandler: surnameBlurHandler,
    reset: surnameReset,
  } = useInput(isNotEmpty)

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(isEmail)

  const nameControlClasses = nameHasError ? 'form-control invalid' : 'form-control'
  const surnameControlClasses = surnameHasError ? 'form-control invalid' : 'form-control'
  const emailControlClasses = emailHasError ? 'form-control invalid' : 'form-control'

  let formIsValid = nameIsValid && surnameIsValid && emailIsValid

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (!formIsValid) {
      return
    }
    const user = {
      name: name,
      surname: surname,
      email: email,
    }
    console.log(user)

    nameReset()
    surnameReset()
    emailReset()
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameControlClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={name}
          />
          {nameHasError && <p className='error-text'>Name cannot be empty</p>}
        </div>
        <div className={surnameControlClasses}>
          <label htmlFor='surname'>Last Name</label>
          <input
            type='text'
            id='surname'
            onChange={surnameChangeHandler}
            onBlur={surnameBlurHandler}
            value={surname}
          />
          {surnameHasError && <p className='error-text'>Surname cannot be empty</p>}
        </div>
      </div>
      <div className={emailControlClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='text'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailHasError && <p className='error-text'>Type a correct email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
