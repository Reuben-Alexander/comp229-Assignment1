// File name: about.jsx, Name: Reuben Alexander, Student ID: 301269903, Date: 2024-05-25
export default function About() {
     return (
          <>
               <h2>About Me</h2>
               <div id="about">
                    <p className="about">
                         Hi, My name is Reuben Alexander.<br />
                         I was born on Novermber 25, 2003 in Chennai, India.
                         I moved to Canada around April 2012 and I've been living here ever since!
                         Currently I'm both a stundent and alumni at Centennial college!
                         I completed a certificate in Computer Repair and Maintenance and i'm studying to be a software engineering technician.
                         <br /> <br />
                         Below is a link to a PDF version of my Resume
                         <br /><br />
                         <button><a href="bonus/Resume.pdf" target="_blank">My Resume</a></button>
                    </p>

                    <div className="about">
                         <img src="bonus/selfPhoto.jpg" alt="An image of me wearing my graduation gown" width="500" height="auto" />
                    </div>

               </div>
          </>
     );
}
