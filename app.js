const dashBoard = document.getElementById('dash');
const profileBtn = document.querySelectorAll('#full-profile');
const closeBtn = document.getElementById('close');


const fetchStudents = async () => {
  const response = await fetch('http://127.0.0.1:8000/api/students/')
  const students = await response.json();
  return students;
}


let id = 1;
let output;
fetchStudents()
  .then(data => {
    data.students.forEach(student => {
      // output = `
      //   <td>${id++}</td>
      // `
      
      // const TR = document.querySelector('#TR');
      // TR.append(output)
    })
  })

  console.log(output);
  // <td>student.firstname</td>
  // <td>student.lastname</td>
  // <td>student.regno</td>
  // <td>student.email</td>
  // <td>student.sex</td>
  // <td>student.status</td>
  // <td>
  //     <button id="full-profile">Profile</button>
  // </td>
  // <td>
  //     <form action="#" method="POST">
  //         <button type="submit">Delete</button>
  //     </form>
  // </td>
profileBtn.forEach(element => {
  element.addEventListener("click", openDashboard);
 
});
closeBtn.addEventListener("click", closeDashboard);


function openDashboard(){
    dashBoard.classList.toggle('slow');
    dashBoard.classList.toggle('dash-close');
  
}
function closeDashboard(){
  dashBoard.classList.add('dash-close');
  
}



