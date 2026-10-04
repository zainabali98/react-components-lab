

function StudentsList(){
const students = ['Ahmad','Ali','Husna','Abdullah','Sarah','Zainab','Raghad','Sayed Hamed']

  return (
  <>
      <ul>
        {students.map((oneStudent) => {
          if (oneStudent !== 'Sayed Hamed') {
            return <p key={oneStudent}>{oneStudent}</p>
          }
        })}
      </ul>
    </>
  )
}

export default StudentsList
