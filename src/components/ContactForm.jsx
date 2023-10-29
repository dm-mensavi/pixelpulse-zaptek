import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    "firstname": '',
    "lastname": '',
    "email": '',
    "phonenumber": '',
    "message": '',
    "policyagreement": false
  })

  const [displayErrMsg, setDisplayErrMsg] = useState({
    "firstname": false,
    "lastname": false,
    "email": false,
    "phonenumber": false,
    "message": false,
    "policyagreement": false
  })

  const updateForm = (event) => {
    const {name, value, type, checked} = event.target
    const inputValue = type === 'checkbox' ? checked : value
    setFormData(oldFormData => ({
      ...oldFormData,
      [name]: inputValue
    }))
  }

  const toggleDisplayErrMsg = (name, value) => {
    setDisplayErrMsg(prevValue => ({
      ...prevValue,
      [name]: value
    }))
  }

  const validateForm = () => {
    let isFormValid = true

    //validates first name
    let isInputValid = formData.firstname !== ''
    isFormValid = isFormValid && isInputValid
    toggleDisplayErrMsg('firstname', !isInputValid)

    //validates last name
    isInputValid = formData.lastname !== ''
    isFormValid = isFormValid && isInputValid
    toggleDisplayErrMsg('lastname', !isInputValid)

    //validates email
    isInputValid = formData.email.includes('@') && formData.email.endsWith('.com')
    isFormValid = isFormValid && isInputValid
    toggleDisplayErrMsg('email', !isInputValid)

    
    //validates phone number
    isInputValid = [...formData.phonenumber].every((number) => {
      return number >= 0 && number <= 9
    })
    isInputValid = formData.phonenumber.length === 10
    isFormValid = isFormValid && isInputValid
    toggleDisplayErrMsg('phonenumber', !isInputValid)

    //validates message
    isInputValid = formData.message !== ''
    isFormValid = isFormValid && isInputValid
    toggleDisplayErrMsg('message', !isInputValid)

    return isFormValid
  }

  const resetForm = () => {
    setFormData({
      "firstname": '',
      "lastname": '',
      "email": '',
      "phonenumber": '',
      "message": '',
      "policyagreement": false
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const isFormValid = validateForm()

    if (isFormValid) {
      console.log(formData);
      resetForm()
    }
  }

  return (
    <form className='lg:col-span-2'>
        <div className='md:grid md:grid-cols-2 md:gap-5'>
            <div className='mb-8'>
            <label htmlFor='firstname' className='text-[#404040] text-sm font-semibold'>
                First name
            </label>
            
            <input
                className='mt-[8px] bg-[#F3F4F6] w-full block p-5 rounded-lg focus:outline-[#1D4ED8]'
                type='text'
                name='firstname'
                id='firstname'
                value={formData.firstname}
                onChange={updateForm}
            />

            {
                displayErrMsg.firstname &&
                <div className='error-msg text-[#E4572E]'>
                <small>
                    Invalid first name
                </small> 
                </div>
            }
            </div>

            <div className='mb-8'>
            <label htmlFor='lastname' className='text-[#404040] text-sm font-semibold'>
                Last name
            </label>
            
            <input
                className='mt-[8px] bg-[#F3F4F6] w-full block p-5 rounded-lg focus:outline-[#1D4ED8]'
                type='text'
                name='lastname'
                id='lastname'
                value={formData.lastname}
                onChange={updateForm}
            />

            {
                displayErrMsg.lastname &&
                <div className='error-msg text-[#E4572E]'>
                <small>
                    Invalid last name
                </small> 
                </div>
            }
            </div>
        </div>

        <div className='mb-8'>
            <label htmlFor='email' className='text-[#404040] text-sm font-semibold'>
            Email
            </label>
            
            <input
            className='mt-[8px] bg-[#F3F4F6] w-full block p-5 rounded-lg focus:outline-[#1D4ED8]'
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={updateForm}
            />

            {
            displayErrMsg.email &&
            <div className='error-msg text-[#E4572E]'>
                <small>
                Invalid email
                </small> 
            </div>
            }
        </div>

        <div className='mb-8'>
            <label htmlFor='phonenumber' className='text-[#404040] text-sm font-semibold'>
            Phone number
            </label>
            
            <input
            className='mt-[8px] bg-[#F3F4F6] w-full block p-5 rounded-lg focus:outline-[#1D4ED8]'
            type='tel'
            name='phonenumber'
            id='phonenumber'
            value={formData.phonenumber}
            onChange={updateForm}
            />

            {
            displayErrMsg.phonenumber &&
            <div className='error-msg text-[#E4572E]'>
                <small>
                Invalid phonenumber
                </small> 
            </div>
            }
        </div>
        
        <div className='mb-8'>
            <label htmlFor='message' className='text-[#404040] text-sm font-semibold'>
            Message
            </label>

            <textarea
            className='mt-[8px] bg-[#F3F4F6] block w-full h-32 p-5 outline-5 rounded-lg focus:outline-[#1D4ED8]'
            name='message'
            id='message'
            value={formData.message}
            onChange={updateForm}
            >
            </textarea>

            {
            displayErrMsg.message &&
            <div className='error-msg text-[#E4572E]'>
                <small>
                Invalid message
                </small> 
            </div>
            }
        </div>

        <div className='mb-8'>
            <input
            className='mt-[8px] bg-[#F3F4F6] text-xl outline-5 rounded-lg'
            type='checkbox'
            name='policyagreement'
            id='policyagreement'
            checked={formData.policyagreement}
            onChange={updateForm}
            />

            <label htmlFor='policyagreement' className='text-[#404040] font-semibold text-sm ml-3'>
            By selecting this, you agree to our <span className='text-[#1d4ed8]'>privacy policy</span>.
            </label>
        </div>

        <button
            className='font-bold bg-[#1D4ED8] text-white py-4 px-2 w-full rounded-lg hover:bg-[#1E3A8A] hover:text-[#89B4E5] transition'
            onClick={handleSubmit}
        >
            Message us
        </button>
    </form>
  )
}

export default ContactForm