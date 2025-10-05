import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="title">CONTACT</h2>
        <p className="lead">
          お問い合わせは、<br className="sp-only" />下記にてお願いいたします。
        </p>
        <div className="contact-list">
          <a 
            className="contact-item" 
            href="https://x.com/ShakaSeYuki" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;