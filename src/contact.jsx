// File name: contact.jsx, Name: Reuben Alexander, Student ID: 301269903, Date: 2024-05-25
export default function Contact() {

     //function to collect and log form data into console then redirect to homepage
     const handleSubmit = (event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const formEntries = Object.fromEntries(formData.entries());
          console.log(formEntries);
          window.location.href = "/";   
     }

     return (
          <>
               <h2>Contact Me</h2>

               <form onSubmit={handleSubmit}>
                    <fieldset>
                         <legend className="bold">Further Inquiries</legend>

                         <label htmlFor="firstName" className="block">First Name</label>
                         <input id="firstName" name="firstName" type="text"></input>

                         <label htmlFor="lastName" className="block">Last Name</label>
                         <input id="lastName" name="lastName" type="text"></input>

                         <label htmlFor="phoneNumber" className="block">Phone Number</label>
                         <input id="phoneNumber" name="phoneNumber" type="text"></input>

                         <label htmlFor="email" className="block">Email</label>
                         <input id="email" name="email" type="text"></input>

                         <label htmlFor="comments" className="block">Message</label>
                         <textarea id="comments" name="comments"></textarea>

                    </fieldset>

                    <fieldset>
                         <legend className="bold">Form Submission</legend>
                         <input type="submit" id="submit" name="submit" value="Submit Form" className="space" />
                         <input type="reset" id="reset" name="reset" value="Reset Form" className="space" />


                    </fieldset>
               </form>

               <p>If you wish to directly email me, please email me at: <br />
                    <a href="mailto:ralexa23@my.centennialcollege.ca" className="email">ralexa23@my.centennialcollege.ca</a>
               </p>

          </>
     );
}
