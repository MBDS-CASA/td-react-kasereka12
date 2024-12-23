import { useState } from 'react'
import './App.css'



function Menu() {
  return (
    <nav>
      <ul>
        <li>Notes, Etudiants, Matières, A propos</li>
      </ul>
    </nav>
  )
}

function Header(props) {
  return (
    <header>
      <div>
        <img src="images.jpg" alt="" />
        <h3>Introduction à React</h3>
        <h6>A la découverte des premières notions de React</h6>
      </div>
    </header>
  )
}

function MainContent() {
  const date = new Date();
  const year = date.getFullYear();
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return (

    <main>
      <p>Ici, nous afficherons des informations interessantes <br />
        Bonjour, on est le {day}, {month}, {year} et il est {hour}:{minute}:{second}"
      </p>

    </main>
  )
}

function Student({ unique_id, course, student, date, grade }) {

  return (
    <section>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Course</th>
            <th>Student</th>
            <th>Date</th>
            <th>grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{unique_id}</td>
            <td>{course}</td>
            <td>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{student.id}</td>
                    <td>{student.firstname}</td>
                    <td>{student.lastname}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>{date}</td>
            <td>{grade}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='foot'>
      <div >
        © {year} - MUTAKA DANIEL, Tous droits réservés.
      </div>
    </footer>
  )
}


function App() {
  const data = [
    {
      "unique_id": 1,
      "course": "Math 101",
      "student": {
        "firstname": "Matthew",
        "lastname": "Gonzalez",
        "id": 2128
      },
      "date": "2023-02-10",
      "grade": 99
    },
    {
      "unique_id": 2,
      "course": "Physics 505",
      "student": {
        "firstname": "Kevin",
        "lastname": "Green",
        "id": 7912
      },
      "date": "2022-11-01",
      "grade": 64
    },
    {
      "unique_id": 3,
      "course": "Chemistry 606",
      "student": {
        "firstname": "James",
        "lastname": "Murphy",
        "id": 5589
      },
      "date": "2022-02-20",
      "grade": 64
    },
    {
      "unique_id": 4,
      "course": "Math 101",
      "student": {
        "firstname": "Johnny",
        "lastname": "Cox",
        "id": 8569
      },
      "date": "2021-11-11",
      "grade": 59
    },
    {
      "unique_id": 5,
      "course": "Math 101",
      "student": {
        "firstname": "Cynthia",
        "lastname": "Clay",
        "id": 2864
      },
      "date": "2023-04-04",
      "grade": 80
    },
    {
      "unique_id": 6,
      "course": "History 303",
      "student": {
        "firstname": "Scott",
        "lastname": "Thompson",
        "id": 2797
      },
      "date": "2022-11-07",
      "grade": 99
    },
    {
      "unique_id": 7,
      "course": "Physics 505",
      "student": {
        "firstname": "Jessica",
        "lastname": "Miller",
        "id": 8264
      },
      "date": "2023-12-26",
      "grade": 70
    },
    {
      "unique_id": 8,
      "course": "Biology 404",
      "student": {
        "firstname": "Stephanie",
        "lastname": "White",
        "id": 1864
      },
      "date": "2020-04-27",
      "grade": 51
    },
    {
      "unique_id": 9,
      "course": "Biology 404",
      "student": {
        "firstname": "Andrea",
        "lastname": "Anderson",
        "id": 4137
      },
      "date": "2020-03-19",
      "grade": 65
    },
    {
      "unique_id": 10,
      "course": "Physics 505",
      "student": {
        "firstname": "Jennifer",
        "lastname": "Sanchez",
        "id": 3816
      },
      "date": "2023-02-08",
      "grade": 79
    },

  ];
  const nombre = Math.floor(Math.random() * 10);
  const student = data[nombre];


  return (
    <>
      <div>
        <Header name='test' />
        <Student
          unique_id={student.unique_id}
          course={student.course}
          student={student.student}
          date={student.date}
          grade={student.grade}
        />
        <MainContent />
        <Footer />
      </div>
    </>
  )
}

export default App
