import React, { useState , useEffect} from "react";
import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./CourseContent.css";
import { useNavigate } from "react-router-dom";
// import courseData from "../Assets/Data/CourseContentDetails.json";
import axios from "axios"




const CourseContent = () => {
  const navigate = useNavigate();

  const [activeLesson, setActiveLesson] = useState(null);
  const [courseData, setcourseData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courseDetail');
        console.log(response);
        setcourseData(response.data);

      } catch (err) {
        console.log(err);
      } 
    };

    fetchData();
  }, []);



console.log(courseData)



  const handleLessonClick = (index) => {
    setActiveLesson(index === activeLesson ? null : index);
  };

  const [activeTab, setActiveTab] = useState("description");

  const calculateTotalDuration = (videos) => {
    let totalSeconds = 0;
    videos.forEach((video) => {
      const timeComponents = video.duration.split(":").map(Number);
      totalSeconds += timeComponents[0] * 60 + timeComponents[1];
    });

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours > 0 ? `${hours}h ` : ""}${minutes}m ${seconds}s`;
  };

  function convertToReadableDuration(duration) {
    const [minutes, seconds] = duration.split(":");
    return `${parseInt(minutes, 10)}m ${parseInt(seconds, 10)}s`;
  }

  return (
    <div className="courseContentContainer">
      <div className="row firstRow">
        <div className="col-8">
          <button className="row firstRowBtn" onClick={() => navigate(-1)}>
            <span>&larr;</span>&nbsp;&nbsp;Back
          </button>
          <div className="row firstRowHeadingBox">
            <div className="courseHeading col-10">{courseData.title}</div>
            <button className="col-2">
              Next video &nbsp; <span>&#5171;</span>
            </button>
          </div>
        </div>
        <div className="col-4 settingTab">
          <button className="profileBox">Profile</button>
          <button className="settingBox">Setting</button>
          <button className="HelpBox">Help</button>
          <button className="logoutBox">Logout</button>
        </div>
      </div>

      <div className="row secondRow">
        <div className="col-8">
          <div className="videoBox">
            <div className="embed-responsive embed-responsive-16by9 mb-4">
              <iframe
                title="title"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/Zj6x_7i1jYY"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videoTitle">{courseData.title}</div>
          </div>

          <div className="tabBox">
            <Tabs
              id="course-content-tabs"
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
            >
              <Tab eventKey="description" title="Description">
                <p>{courseData.lessons[0].description}</p>
              </Tab>
              <Tab eventKey="lessons" title="Lessons">
                {courseData.lessons.map((lesson, index) => (
                  <div key={index}>
                    <h5>{lesson.title}</h5>
                    <ul className="list-group">
                      {lesson.videos.map((video, vidIndex) => (
                        <li key={vidIndex} className="list-group-item">
                          <a href={video.link}>{video.title}</a> -{" "}
                          {video.duration}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Tab>
              <Tab eventKey="overview" title="Overview">
                <p>{courseData.overview}</p>
              </Tab>
            </Tabs>{" "}
          </div>
        </div>
        <div className="col-4 accordianBox">
          <Accordion
            activeKey={activeLesson}
            onSelect={handleLessonClick}
            alwaysOpen
          >
            {courseData.lessons.map((lesson, index) => (
              <div key={index} className="accordion-item">
                <Accordion.Item eventKey={index}>
                  <Accordion.Header onClick={() => handleLessonClick(index)}>
                    <div className="lesson-meta">
                      <div className="lesson-title">
                        {index + 1}&nbsp;.&nbsp;
                        {lesson.title}
                      </div>
                      <span className="lesson-duration">
                        Duration : {calculateTotalDuration(lesson.videos)}
                      </span>
                      <span className="">
                        &nbsp; /&nbsp; Total Videos : {lesson.videos.length}
                      </span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <ul className="list-group">
                        {lesson.videos.map((video, vidIndex) => (
                          <li key={vidIndex} className="list-group-item">
                            <span className="video-number">
                              <a href={video.link}>
                                {`${index + 1}.${vidIndex + 1}`}&nbsp;
                                {video.title}
                              </a>
                            </span>
                            <span className="lesson-duration">
                              Duration :{" "}
                              {convertToReadableDuration(video.duration)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
