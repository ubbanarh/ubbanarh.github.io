# WAPH-Web Application Programming and Hacking

## Instructor: Dr. Phu Phung

## Student

**Name**: Rakesh Ubbana

**Email**: ubbanarh@mail.uc.edu

**Short-bio**:I worked as Full stack web developer for more than 3 years.And I have a keen interest in software development.And I love coding.

![Rakesh's headshot](./Rakesh_ubbana.jpg)

**Overview**

In this Individual project, I have created and deployed personal website on GitHub Pages to serve as my professional profile and resume for me. The website includes sections for my name, headshot, contact information, background like education, experiences, and skills, and a dedicated page for the "Web Application Programming and Hacking" course along with related hands-on projects.

The website utilizes an open-source CSS framework, Bootstrap, for styling and responsiveness. It incorporates various JavaScript functionalities using jQuery and additional JavaScript frameworks/libraries such as Moment JS and Anime JS. Integration with public APIs, including jokeAPI and a graphics-based weather api, enhances the interactivity of the website. JavaScript cookies are implemented to remember client visits and display session messages.

**Direct link for Individual project 1**: [https://github.com/ubbanarh/ubbanarh.github.io/tree/main](https://github.com/ubbanarh/ubbanarh.github.io/tree/main)

**Personel Website URL**: [https://ubbanarh.github.io/](https://ubbanarh.github.io/)

**A.Personal Website Development:**

I made a website about myself. It has parts for my name, picture, how to contact me, my education and work history, and what skills I have. I also made a special page just for the "Web Application Programming and Hacking" course.I chose basic design from the web for this.

Introduction to "Web Application Programming and Hacking" Course:

I made a new page on my website to talk about the "Web Application Programming and Hacking" course. I shared what the course is about and some cool projects I worked on for it.
Link to that is here: [https://ubbanarh.github.io/waph.html](https://ubbanarh.github.io/waph.html)

**B.Non-technical requirements**

For non-technical requirements,
**_Bootstrap_**
I have used Bootstrap and was used to style the website for consistency and responsiveness.
**_Google Analytics_**

I have signed up with Google Analytics and integrated it to my website to track page visits, which will used to know users.I have used the code for this to add in head tag from
official documentation.

**C.Technical requirements**

**_Basic JavaScript Code_**

Implemented the following functionalities using jQuery and other JavaScript frameworks/libraries:

I have used same code as Lab2 for Analog clock and Show/hide email functionality.
For Digital clock implementation i have used MOMENT JS library.

In addition to that i have used ANIME JS library and added a rotate feature to my website .

**_Two public Web APIs integration_**

1.Integrate the jokeAPI :
I have used same code for this as in lab2 ,but added a call back to recall the api every 1 minute.

2. Integrate a public API with graphics.
   Fo this I have used weather but API to display the temparature and description of the weather and it changes every hour.

**JavaScript cookies:**
Below is my brief explanation of the JavaScript cookies implementation:

1.The setCookie function saves a cookie in your web browser. It includes details like the name of the cookie, what it contains, and how long it should stay there.

2.The getCookie function finds and retrieves the value of a specific cookie from your browser.
isPreviouslyVisited checks if you've visited the website before by loking for a special cookie.

3.UTCToEST changes a time from UTC (a global time standard) to Eastern Standard Time (EST), which miht be the time zone you're in.
welcomeMessageToUser shows message when you visit the site.

If it's user's first time, it says "Welcome to my homepage!" and remembers that you've been there. If you've been before, it says "Welcome back! Your last visit was some time before." The time is adjusted to your local time zone before it's shown.
