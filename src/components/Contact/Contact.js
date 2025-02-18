import React, { useEffect, useState } from "react";
import "./Contact.css";
import { faqs } from "./faqs";
function Contact() {
  const [answer_id, setAnswerId] = useState();
  const handleClick = (id) => {
    setAnswerId(answer_id===id?null:id);
  };

  return (
    <div className="contact">
      <h2 className="text-center">Contact Us</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6 px-2">
            <div className="contact-container">
              <h3>Get in Touch</h3>
              <p>Have questions? We'd love to hear from you.</p>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="your full name"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="your email"
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">
                  Message
                </label>
                <textarea class="form-control" id="message" rows="3" placeholder="type your message here..."></textarea>
              </div>
              <div className="send-btn">
                <button>Send Message</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="faqs">
              <h3>FAQs</h3>
              <div className="items">
                {faqs?.map((faq) => {
                  return (
                    <div className="item" key={faq?.id}>
                      <div
                        className="header"
                        onClick={() => handleClick(faq.id)}
                      >
                        <h5>{faq?.question}</h5>
                        <p>{answer_id == faq.id ? "-" : "+"}</p>
                      </div>
                      <div
                        className={
                          answer_id == faq.id
                            ? "answer-box show_answer"
                            : "answer-box hide_answer"
                        }
                      >
                        <p>{faq?.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
