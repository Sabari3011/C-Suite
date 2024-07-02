import React from "react";
import "./Courses.css";
import { useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
// import coursesData from "../Assets/Data/CourseList.json";
import axios from "axios"


const resolveImagePath = (relativePath) => {
  return require(`../Assets/Images/${relativePath}`);
};

const Courses = () => {
  const navigate = useNavigate();
  const [coursesData, setcoursesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courseList');
        setcoursesData(response.data.courses);
    
      } catch (err) {
        console.log(err);
      } 
    
    };

    fetchData();
  }, []);



  
console.log("--------",coursesData)


  return (
    <>
      <div className="main-content">
        <div className="cardContainer3">
          <h2>Courses</h2>
          <div className="courseContainer3">
            {coursesData.map((course) => (
              <div className="courseCard3" key={course.id}>
                <div className="courseOverlay3">
                  <div className="courseImageBox3">
                    <img
                      src={resolveImagePath(course.image)}
                      alt={course.title}
                      className="courseImage3"
                    />
                    <div className="courseImageTxt3">{course.title}</div>
                  </div>
                  <div className="courseDetails3">
                    <p>{course.description}</p>
                    <button className="courseDetailBtn3">View Details</button>
                  </div>
                </div>
                <div className="courseLessonBox3">
                  <h5>Lessons</h5>
                  <ul>
                    {course.lessons.slice(0, 5).map((lesson, index) => (
                      <li key={index}>{lesson}</li>
                    ))}
                    {course.lessons.length > 5 && <li>...and more</li>}
                  </ul>
                  <button
                    onClick={() => navigate("/courseDetails")}
                    className="lessonDetailBtn3"
                  >
                    View Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
