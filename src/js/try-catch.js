export const save = (key, value)=>{
  try{
    localStorage.setItem(key, JSON.stringify(value))
    }
    catch(error){
    console.log(`You have an error ${error}`)
  }
}

export const getItemFromStorage = (key)=>{
  try{
    return JSON.parse(localStorage.getItem(key))
  }
  catch(error){
    console.log(`You have an error ${error}`)
  }
}