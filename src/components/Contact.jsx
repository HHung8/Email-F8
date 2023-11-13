import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_89qoa49",
        "template_6yz4iln",
        form.current,
        "P0qXXqXldPgPLRqeZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );  
  };
  return (
     <div>
       <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <label>Message</label>
        <textarea name="message" rows={8} placeholder="Vui lòng nhập câu hỏi !  "  />
        <input className="SenForm" type="submit" value="Send" />
      </form>
     </div>
  );
};

export default Contact;
