const STORAGE_KEY = 'feedback-form-state'

const formData ={
    email: '',
    message: ''
}

const feedbackForm = document.querySelector('.feedback-form')

const saveData =localStorage.getItem(STORAGE_KEY);
if(saveData){
const parseSaveData = JSON.parse(saveData);
formData.email = parseSaveData.email || '';
formData.message = parseSaveData.message || '';

feedbackForm.elements.email.value =formData.email;
feedbackForm.elements.message.value =formData.message;

}

feedbackForm.addEventListener('input', (e) => {
    const { name, value } = e.target;
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

})



feedbackForm.addEventListener('submit', e => {
    e.preventDefault();
    const { email, message } = formData;
    if(!email || !message){
        alert('Fill please all fields')
        return;
    }

console.log({ email, message });

   localStorage.removeItem(STORAGE_KEY);
   formData.email= '';
   formData.message = '';
   feedbackForm.reset()
   
})





























