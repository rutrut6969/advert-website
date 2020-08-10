import React from 'react';

export default function MiddleContent() {
  return (
    <div id='middle-content'>
      <h3>Hi There!</h3>
      <p className='intro'>
        My name is <span>Isaac Rutledge</span> I'm a web software engineer, and
        website developer. And I'm here to share my skills with you! I've got a
        few <span>packages</span> that I offer to anyone wanting to have a{' '}
        <span>professionally</span> designed website! Those packages will be
        listed below:
      </p>
      <ul>
        <li>
          Basic Website -- $40 per hour, or $1,000 --{' '}
          <p>
            This will be a basic 3 page website to display information about
            your company. Typically these types of sites will contain a home
            page, and about page, and a contact form, which I can set up to send
            you automated email messages when someone fills it out.
          </p>
        </li>
        <li>
          Basic Website with Back-End integration -- $55 per hour, or $1,500 --{' '}
          <p>
            This will be the same as the first except I will integrate a
            back-end for your contact form, so you can keep track and better
            organize your clients or information.
          </p>
        </li>
        <li>
          Full Scale Web Application -- $100 per hour or $4,000 --{' '}
          <p>
            This one will take a while to complete hence the higher price. This
            will be that package that will let you have your own entire platform
            based on what you want it to be. If you have an idea for a web
            application that you want to be created, and integrated for
            commercial use. I can help make your business become a reality. (And
            who knows, maybe we can become partners ;P)
          </p>
        </li>
      </ul>
    </div>
  );
}
