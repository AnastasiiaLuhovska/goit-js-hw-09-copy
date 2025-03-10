import { getItemFromStorage, save } from './try-catch.js';

const formData = {
   email: "",
   message: ""
}
const localStorageKey = 'feedback-form-state'

const form = document.querySelector('.feedback-form')

const fillAllFields = () =>{
  if(!getItemFromStorage(localStorageKey)){
    return
  }
  const allData = getItemFromStorage(localStorageKey)
  form.elements.email.value = allData.email
  form.elements.message.value = allData.message
  formData.email = allData.email
  formData.message = allData.message
}

fillAllFields()

 const addToLocalStorage = (event)=>{
   formData[event.target.name] = event.target.value
   save(localStorageKey,formData)
 }

 form.addEventListener('input', addToLocalStorage)

 const handleSubmit = (event)=>{
  event.preventDefault()
  const {email, message} = event.target.elements
   if(!email.value.trim() || !message.value.trim() ){
     return alert('Fill please all fields')
   }
   formData.email = email.value
   formData.message = message.value
   console.log(formData)
   event.target.reset()
   localStorage.removeItem(localStorageKey)
   formData.email = ''
   formData.message = ''
 }

 form.addEventListener('submit', handleSubmit)