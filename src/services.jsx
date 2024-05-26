// File name: services.jsx, Name: Reuben Alexander, Student ID: 301269903, Date: 2024-05-25
export default function Services() {
     return (
          <>
               <h2>My Services</h2>
               <p>Since I've studied about both the hardware and software of computers, I'm able to provide many services</p>

               <div id="services">

                    <ul id="hardware">
                         <h3>Hardware Skills</h3>
                         <p>I have experience working on and fixing many devices, such as laptops, desktops, monitors, etc.
                              Working on those devices taught me the skills to do the following:
                         </p>
                         <li>Hardware Diagnostics</li>
                         <li>Parts Replacement</li>
                         <li>Specification Gathering</li>
                         <li>Time Efficient Repairs</li>
                         <li>Project Explanation and Presentation</li>
                    </ul>
                    <div id="hardImg"><img src="bonus/hardware.jpg" alt="" width="600" height="auto" /></div>

                    <ul id="software">
                         <h3>Software Skills</h3>
                         <p>Currently I've been practicing coding many projects in many different languages.
                              Some projects have similar functions while others are unique to their language.
                              A few examples are:
                         </p>
                         <li>General Programming</li>
                         <li>Web Development</li>
                         <li>Designing and Maintaining software systems</li>
                         <li>&#40;Currently Learning&#41; Full stack Development</li>
                    </ul>
                    <div id="softImg"><img src="bonus/software.png" alt="" width="600" height="auto" /></div>
               </div>
          </>
     );
}