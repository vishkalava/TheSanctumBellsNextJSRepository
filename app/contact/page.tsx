"use client";
import { useState } from "react";
import axios from "axios";

// -----------

// to handle sending form message
type serverStateType = {
  submitting: boolean;
  status?: {
    ok: boolean;
    msg: string;
  } | null;
};

type formDataType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const initialFormData: formDataType = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<formDataType>(initialFormData);
  const [serverState, setServerState] = useState<serverStateType>({
    submitting: false,
    status: null,
  });

  /**
   * Change {formData} variable when user input data
   *
   * @param e change event in form inputs
   */
  const handleDataChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /**
   * Handle the http request we sent to send our message (that user wrote)
   * and give message to the user to know what happened, is the message sent or not.
   *
   * @param ok if message has been sent or not
   * @param msg the message to be shown to the user
   */
  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setFormData(initialFormData);
    }
    setTimeout(() => {
      setServerState((prev: serverStateType) => ({ ...prev, status: null }));
    }, 3000);
  };

  /**
   * Submitting message when user clock send button.
   *
   * The user will add his formspree end point here.
   *
   * @param e form submit event
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Submitting Form
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xgebyqqz", // user formspree endpoint
      data: formData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        handleServerResponse(true, "Message Has Been Send");
      })
      .catch((r) => {
        handleServerResponse(false, "Error occuars while sending");
      });
  };

  return (
    <main className="page">
      <div id="content" className="site-content">
        <div className="header-content content-1170 center-relative block">
          <h1 className="entry-title">
            Let's work together! <br />
            Feel free to{" "}
            <i>
              <span className="underline">contact us</span>
            </i>{" "}
            any time.
          </h1>
        </div>

        <div className="page-content-wrapper center-relative content-1170">
          <div className="page-content">
            <div className="one_half">
              <p>
                Phasellus sit amet scelerisque sapien. Aliquam erat volutpat.
                Nam ut lectus at velit dapibus sollicitudin eu.
              </p>
              <br />
              <p>
                Because they are hard, because that goal will serve to organize
                and measure the best of our energies and skills, because that
                challenge is one that we are willing to accept, one we are
                unwilling to postpone and one.
              </p>
              <br />
              <p>
                <strong>Phone: </strong>+123.456.789 <br />
                <strong>Skype: </strong>donec.sit.amet <br />
                <strong>Email: </strong>hello@yoursite.com <br />
              </p>
            </div>
            <div className="one_half last">
              {/* The Contact Form */}
              <form className="contact-form" onSubmit={handleSubmit}>
                <p>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData["name"]}
                    onChange={handleDataChange}
                  />
                </p>
                <p>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    pattern="(?=.*[a-zA-Z])[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}"
                    required
                    value={formData["email"]}
                    onChange={handleDataChange}
                  />
                </p>
                <p>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData["subject"]}
                    onChange={handleDataChange}
                  />
                </p>
                <p>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required
                    value={formData["message"]}
                    onChange={handleDataChange}
                  ></textarea>
                </p>
                <p className="contact-submit-holder">
                  <input type="submit" value="SEND" />
                </p>
                {(serverState.submitting || serverState.status?.msg) && (
                  <p className="respond-message">
                    {serverState.submitting
                      ? "Sending message"
                      : serverState.status
                      ? serverState.status?.msg
                      : ""}
                  </p>
                )}
              </form>
            </div>
            <div className="clear"></div>
          </div>
          <div className="full-page-width center-relative">
            <div className="video-iframe">
              {/* Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d37306.782296559344!2d-73.99377620100395!3d40.72226371358432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1495615868572"
                width="600"
                height="450"
                allowFullScreen
              ></iframe>
            </div>
            <br />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
