import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "48ae8c55-e70c-457d-9d57-a040d35819c2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
    }
  };

  return (
    <div>
      <Navbar />
      <section className="contact">
        <form onSubmit={onSubmit}>
          <h2>Contact Form</h2>
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" className="field" placeholder="Enter Your Name" name="name" required />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input type="email" className="field" placeholder="Enter Your Email" name="email" required />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea name="message" className="field mess" placeholder="Enter your Message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
      
      <style jsx="true">{`
        .contact {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        form {
          max-width: 800px;
          width: 100%;
          background: transparent
          border: 2px solid rgba(255, 255, 255, .1);
          backdrop-filter: blur(20px);
          box-shadow: 0 0 10px rgba(0, 0, 0, .2);
          border-radius: 10px;;
          padding: 30px 50px 40px;
          // border-radius: 8px;
          // box-shadow: 0 0 10px rgba(0, 0, 0, .1);
          color: #fff;
          margin: 25px;
        }

        form h2 {
          font-size: 30px;
          text-align: center;
        }

        form .input-box {
          margin-top: 20px;
        }

        .input-box .field {
          width: 100%;
          height: 50px;
          background: transparent;
          border: 2px solid;
          outline: none;
          border-radius: 6px;
          padding: 15px;
          font-size: 16px;
          
          // color: #fff;
          margin-top: 8px;
        }
          
        .input-box input::placeholder {
                color: #fff;
            }

        .input-box .field.mess {
          height: 100px;
          resize: none;
          
        }

        form button {
          width: 100%;
          height: 55px;
          background: #fff;
          border: none;
          border-radius: 6px;
          box-shadow: 0 0 10px rgba(0, 0, 0, .1);
          cursor: pointer;
          font-size: 16px;
          color: #111;
          font-weight: 500;
          margin-top: 25px;
          transition: .5s;
        }

        form button:hover {
          background: #624ec6;
        }
      `}</style>
    </div>
  )
}

export default Contact
