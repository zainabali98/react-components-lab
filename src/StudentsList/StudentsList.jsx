

function StudentsList(){
const students = ['Ahmad','Ali','Husna','Abdullah','Sarah','Zainab','Raghad','Sayed Hamed']

  return (
    <>
    <ul>
      {students.map((oneStudent)=>
      <div key={oneStudent}>
        <p>{oneStudent}</p>
      </div>)}

    </ul>
    </>
  );
}

export default StudentsList
