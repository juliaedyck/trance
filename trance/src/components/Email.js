import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useState } from "react";
import { send } from "emailjs-com";

export const Email = () => {
  //   const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm('service_585054y', 'template_ptppwkw', form.current, 'e4H_7DZnWwKQH629o')
  //       .then((result) => {
  //           console.log(result.text);
  //       }, (error) => {
  //           console.log(error.text);
  //       });
  //   };

  //   return (
  //     <Form>
  //        <p> Join the mailing list to be informed about each session (1 email/month)</p>
  //     <form ref={form} onSubmit={sendEmail}>
  //         <Inputs>
  //       <label>Name</label>
  //       <input type="text" name="user_name" />
  //       <label>Email</label>
  //       <input type="email" name="user_email" />
  //       <input type="submit" value="Send" />
  //       </Inputs>
  //     </form>
  // //     </Form>
  //   );

  const [success, setSuccess] = useState(false);

  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_585054y", "template_ptppwkw", toSend, "e4H_7DZnWwKQH629o")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
        setToSend({
          from_name: "",
          reply_to: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Form>
      <p>
        {" "}
        Join the mailing list to be informed about each session (1 email/month)
      </p>
      <form onSubmit={onSubmit}>
        <Inputs>
          <Input
            type="text"
            name="from_name"
            placeholder="your name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="reply_to"
            placeholder="your email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <Button type="submit">Send </Button>
        </Inputs>
      </form>

      {success === true && <>Thank you! </>}
    </Form>
  );
};

const Form = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
align-items:center;
  font-family: var(--font-body);

`;

const Inputs = styled.div`
  margin: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 500px;
  

@media (min-width: 500px) {
flex-direction: row;
  max-width: 600px;
  font-size: 14px;
}
`;

const Input = styled.input`
margin: 5px;
`

const Button = styled.button`
  font-family: "Sonsie One";
  color: white;
  background-color: var(--background-color);
  border: 0px;
  border-radius: 3%;
  font-size: 16px;
  margin: 5px;


`;
