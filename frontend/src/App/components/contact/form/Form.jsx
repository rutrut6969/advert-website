import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Form({ change, form }) {
  const onSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:4000/send-text?recipient=${'+16182699499'}&message=${
        form.message
      }&name=${form.name}&email=${form.email}&phone=${form.phone}&packaged=${
        form.package
      }`
    ).catch((err) => console.error(err));
    setTimeout(
      () =>
        alert(
          'Thank you for reaching out to me I will get ahold of you as soon as I can!'
        ),
      500
    );
  };

  const [toggle, setToggle] = useState({
    name: false,
    email: false,
    message: false,
    phone: false,
    package: false,
  });
  const label_name = useSpring({
    marginTop: toggle.name ? '-37px' : '0px',
  });

  const label_email = useSpring({
    marginTop: toggle.email ? '-37px' : '0px',
  });

  const label_phone = useSpring({
    marginTop: toggle.phone ? '-37px' : '0px',
  });

  const label_package = useSpring({
    marginTop: toggle.package ? '-37px' : '0px',
  });

  const label_message = useSpring({
    marginTop: toggle.message ? '-108px' : '0px',
  });

  const toggled = (e) => {
    if (toggle[e.target.name] === false) {
      setToggle({
        ...toggle,
        [e.target.name]: true,
      });
    }
  };

  useEffect(() => {
    if (form.name !== '') {
      setToggle({
        ...toggle,
        name: true,
      });
    } else {
      setToggle({
        ...toggle,
        name: false,
      });
    }
    if (form.email !== '') {
      setToggle({
        ...toggle,
        email: true,
      });
    } else {
      setToggle({
        ...toggle,
        email: false,
      });
    }
    if (form.phone !== '') {
      setToggle({
        ...toggle,
        phone: true,
      });
    } else {
      setToggle({
        ...toggle,
        phone: false,
      });
    }
    if (form.package !== '') {
      setToggle({
        ...toggle,
        package: true,
      });
    } else {
      setToggle({
        ...toggle,
        package: false,
      });
    }
    if (form.message !== '') {
      setToggle({
        ...toggle,
        message: true,
      });
    } else {
      setToggle({
        ...toggle,
        message: false,
      });
    }
  }, []);

  return (
    <form>
      <div>
        <input
          onFocus={toggled}
          onFocusCapture={toggled}
          type='text'
          name='name'
          value={form.name}
          onChange={change}
          required
        />
        <animated.label style={label_name}>Name:</animated.label>
      </div>

      <div>
        <input
          onFocus={toggled}
          type='text'
          name='email'
          value={form.email}
          onChange={change}
          required
        />
        <animated.label style={label_email}>E-mail:</animated.label>
      </div>

      <div>
        <input
          type='text'
          name='phone'
          value={form.phone}
          onFocus={toggled}
          onChange={change}
        />
        <animated.label style={label_phone}>Phone:</animated.label>
      </div>

      <div>
        <select
          required
          onFocus={toggled}
          onChange={change}
          name='package'
          defaultValue=''
          value={form.packages}>
          <option value='Basic'>Basic $40 per hour or $1,000</option>
          <option value='Basic W/BE'>
            Basic With Back-end $55 per hour or $1,500
          </option>
          <option value='Full Stack'>
            Full Stack Web App $100 per hour or $4,000
          </option>
        </select>
        <animated.label style={label_package}>Package:</animated.label>
      </div>
      <div>
        <textarea
          required
          onFocus={toggled}
          name='message'
          onChange={change}
          value={form.message}
        />
        <animated.label className='message-label' style={label_message}>
          Message:
        </animated.label>
      </div>

      <button type='submit' onClick={onSubmit} className='button'>
        Submit Info
      </button>
    </form>
  );
}
