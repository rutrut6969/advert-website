import React, { useState } from 'react';
import Form from './form/Form';
import './contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', // Mandatory
    email: '', // Mandatory
    phone: '', // Optional
    package: '',
    message: '',
  });

  const change = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const packages = [
    'Basic',
    'Basic With Back-end',
    'Full Stack Web Application',
  ];

  return (
    <div className='Contact'>
      <h3>You can use this form to get in touch with me!</h3>
      <Form form={form} change={change} />
    </div>
  );
}
