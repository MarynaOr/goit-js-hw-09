import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const m="feedback-form-state",e={email:"",message:""},t=document.querySelector(".feedback-form"),o=localStorage.getItem(m);if(o){const a=JSON.parse(o);e.email=a.email||"",e.message=a.message||"",t.elements.email.value=e.email,t.elements.message.value=e.message}t.addEventListener("input",a=>{const{name:s,value:l}=a.target;e[s]=l,localStorage.setItem(m,JSON.stringify(e))});t.addEventListener("submit",a=>{a.preventDefault();const{email:s,message:l}=e;if(!s||!l){alert("Fill please all fields");return}console.log({email:s,message:l}),localStorage.removeItem(m),e.email="",e.message="",t.reset()});
//# sourceMappingURL=2-form.js.map