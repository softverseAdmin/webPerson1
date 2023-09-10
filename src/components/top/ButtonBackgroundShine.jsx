import React, { useState } from 'react';
import './TopContent'; // Import your CSS file
import Contact from "../contact/Contact";

function ButtonBackgroundShine() {
  // State to track the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    content: '',
  });

  const modalContent1 = (
    <div className="container overflow-scroll">
      <table className="table table-bordered text-lefttable">
        <thead>
          <tr>
            <th>No</th>
            <th>【Project Name】</th>
            <th>【Project Overview】</th>
            <th>【WordPress】</th>
            <th>【Role】</th>
            <th>【Member】</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Product Overview Website</td>
            <td>・The project focuses on product benefits and tells its story using natural language.<br />
                ・We adapt to user and admin requests and plans. <br />
                ・Outsourcing work from Japan to Nepal.<br />
                ・Meeting Nepal's engineer needs and managing work schedules from Japan.
            </td>
            <td>
                Html <br />
                CSS <br />
                JavaScript <br />
                PHP <br />
            </td>
            <td>
                Senior Developer
            </td>
            <td>6</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Public bath / store management system</td>
            <td>
                ・Improving the store system for a public bath company. <br />
                ・Fixing program issues through unit testing. <br />
                ・Editing screens (HTML/jQuery) and adding data/payment features (C#/ORACLE).
            </td>
            <td>
            【OS】
             　Windows
            【Language】
             　C#
             　JavaScript
            【DB】
             　MySQL
            </td>
            <td>
                Developer
                Project Tester
            </td>
            <td>3</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Food company/sales management system</td>
            <td>
                ・Enhancing and altering a food company's core system functionalities. <br />
                ・Handling program development up to integration testing. <br />
                ・Adding features and conducting unit and integration tests for the sales system using PHP (Laravel).
            </td>
            <td>
            【OS】
             　Windows
             　Linux
            【Language】
             　PHP(Laravel)
             　JavaScript
            【DB】
             　MySQL
            </td>
            <td>
                Developer
                Project Tester
            </td>
            <td>5</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Hospital and Patient Data Management System</td>
            <td>
                Creating healthcare data aggregation and analysis system with AWS, <br /> Tableau, and RStudio.
                Responsible for program development up to unit testing. <br />
                Developing, unit testing, and integrating data aggregation <br /> and analysis systems with AWS Lambda, XSL, and JavaScript.
            </td>
            <td>
            【OS】
            Windows
            Amazon Linux
            AWS
            【Languages】
            Python
            XSL
            JavaScript
            【DB】
            SQL
            (Amazon DynamoDB)
            【Others】
            AWS

            (EC2/CloudWatch/S3/Lambda/Cognito
            /API Gateway /AWS IoT/Kinesis
            /CloudFront /DynamoDB)
            </td>
            <td>
            Developer
            Project Tester
            </td>
            <td>10</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Transport and excess charge management system</td>
            <td>
                ・Enhancing excess charge management system for a transportation firm.
                ・Responsible for program fixes and unit testing.
                ・Adding settlement functionality with PHP and JavaScript, along with unit testing.
            </td>
            <td>
                【OS】
                Windows
                【Language】
                PHP(Laravel)
                JavaScript
                【DB】
                MySQL
            </td>
            <td>
                Developer
                Project Tester
            </td>
            <td>10</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
  
  // Function to open the modal with content 1
  const openModal1 = () => {
    setIsModalOpen(true);
    setModalContent({
      title: 'Work History',
      content: modalContent1,
    });
  };
  const modalContent2 = (
    <Contact></Contact>
  );

  // Function to open the modal with content 2
  const openModal2 = () => {
    setIsModalOpen(true);
    setModalContent({
      title: 'Contact Form',
      content: modalContent2,
    });
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const buttonStyle1 = {
    background: "linear-gradient(110deg, #000103 45%, #1e2631 55%, #000103)",
    backgroundSize: "200% 100%",
    animation: "background-shine 2s linear infinite",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    border: "2px solid #1e2631",
    color: "#ccc",
    fontWeight: "bold",
    transition: "color 0.2s ease",
    outline: "none",
    cursor: "pointer",
    marginRight: "10px",
  };

  const buttonStyle2 = {
    background: "linear-gradient(110deg, #000103 45%, #1e2631 55%, #000103)",
    backgroundSize: "200% 100%",
    marginLeft: "40px",
    animation: "background-shine 2s linear infinite",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    border: "2px solid #1e2631",
    color: "#ccc",
    fontWeight: "bold",
    transition: "color 0.2s ease",
    outline: "none",
    cursor: "pointer",
    marginRight: "10px",
  };

  return (
    <div className='d-flex'>
        
      {/* Button 1 to open the first modal */}
      <button className="form-control btn" style={buttonStyle1} onClick={openModal1}>Detail</button>

      {/* Button 2 to open the second modal */}
      <button className="form-control btn " style={buttonStyle2} onClick={openModal2}>Contact</button>

      {/* The modal content */}
      {isModalOpen && (<>
        <div className="modal-container text-center align-center">
          <div className="modal show fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title w-100 text-center">{modalContent.title}</h5>
                  <button type="button" className="close btn btn-primary" onClick={closeModal} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body" style={{overflow: 'scroll', height: '360px',}}>
                  {modalContent.content}
                </div>
              </div>
          </div>
        </div>
        </>)}
    </div>
  );
}

export default ButtonBackgroundShine;