import {useState} from "react";

function App() {
 const [form, setForm] = useState({ 
 "userId": "637cdc5c4f83f8f717775f63",
 "staffNo":"gekdu123",
 "firstName": "ola ",
 "lastName": "benji",
 "middleName": "benson",
 "homeAddress": "yola",
 "phoneNumber": "+2348134005655",
 "gender": "male",
 "personalEmail": "rankihddddhhhhhb@gmail.com",
 "ipPhone": "ueeheh",
 "employmentType": "Permanent staff",
 "employmentDate": "2022-11-27T21:23:07.639Z",
 "staffPositionId": "637d334eee0babe519637dcd"
})
 async function   handleSubmit  (e){
  e.preventDefault();
  const res = await fetch("https://artinic-app.herokuapp.com/staff/create",{
    
    method:"POST",
    body: JSON.stringify(form)
,
    headers :{
      Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhbmt5YWthYkBnbWFpbC5jb20iLCJfaWQiOiI2Mzg5N2I1OThjYTMwOGEyZGMxOWViNTkiLCJpYXQiOjE2Njk5ODg1NTV9.jWfdkq64O6Kov-iA2hP7uKD3a_3LWP7xyjVyUYZiqgY"

    }
   
  });
  console.log(res.body);
       
 }
 function handleInput (e){
  setForm({...form, [e.target.name] :e.target.value})

 }
  return (
    <div>
       <form onSubmit={handleSubmit}>
          
           
        <input type="text" name="userId" placeholder="userId" onChange={handleInput} value={form.userId}/>
        <input type="text" name="staffNo" placeholder="staffNo" onChange={handleInput} value={form.staffNo}/>
        <input type="text" name="firstName" placeholder="firstName" onChange={handleInput} value={form.firstName}/>
        <input type="text" name="lastName" placeholder="lastName" onChange={handleInput} value={form.lastName}/>
        <input type="text" name="middleName" placeholder="middleName" onChange={handleInput} value={form.middleName}/>
        <input type="text" name="homeAddress" placeholder="homeAddress" onChange={handleInput} value={form.homeAddress}/>
        <input type="text" name="phoneNumber" placeholder="phoneNumber" onChange={handleInput} value={form.phoneNumber}/>
        <input type="text" name="gender" placeholder="gender" onChange={handleInput} value={form.gender}/>
        <input type="text" name="personalEmail" placeholder="personalEmail" onChange={handleInput} value={form.personalEmail}/>
        <input type="text" name="ipPhone" placeholder="ipPhone" onChange={handleInput} value={form.ipPhone}/>
        <input type="text" name="employmentType" placeholder="employmentType" onChange={handleInput} value={form.employmentType}/>
        <input type="date" name="employmentDate" placeholder="employmentDate" onChange={handleInput} value={form.employmentDate}/>
        <input type="text" name="staffPositionId" placeholder="staffPositionId" onChange={handleInput} value={form.staffPositionId}/>
      <button type="submit"> submit </button>
       </form>
    </div>
  );
}

export default App;
