# WAPH-Web Application Programming and Hacking

## Instructor: Dr. Phu Phung

## Student

***Name**: Madishetty Saikrishna

**Email**: madishsn@mail.uc.edu

**Short-bio**: Sai Krishna has keen interest on Web development and interested to do hands-on projects and hackathons                

                                                                                                           
![krishna's headshot](images/Krishna.jpg)

## Repository Information

Respository's URL: [https://github.com/madishsn/wash-madishsn.git](https://github.com/madishsn/wash-madishsn.git)

This is a private repository for Saikrishna Madishetty to store all code from the course. The organization of this repository is as follows.



## Lab Overview
- Lab 2 focuses on honing practical skills in frontend web development. In the first task, participants create a foundational HTML page by incorporating essential tags and employing both inlined and external JavaScript to introduce interactive elements. The utilization of echo.php is emphasized to effectively handle GET and POST requests, highlighting the significance of server-side interaction. Moving on to Task 2, participants delve into Ajax, CSS (inline, internal, external), jQuery, and Web API integration. Various types of CSS are explored to provide diverse styling options. The second task also covers the implementation of async and await functions, along with the Fetch API, enabling participants to adeptly handle asynchronous operations and make HTTP requests. Overall, Lab 2 equips participants with comprehensive skills in HTML, JavaScript, CSS, and essential web development tools for creating dynamic and interactive web pages.ions and making HTTP requests.



### Labs 

[Hands-on exercises in lectures](labs) 

  - [Lab 2]([https://github.com/madishsn/wash-madishsn/tree/main/labs/lab2)](https://github.com/madishsn/wash-madishsn/tree/main/labs/lab2)): Front End Web Development

## Task 1 - Basic HTML with forms and and Javascript
## A. HTML

- I have created the html file with name waph-madishsn.html and wrote a basic html code displaying course name, instructor name, and my name along with my headshot. I also included a clickable url using <a> tag which redirects to w3schools homepage.Now I have deployed my images folder using a command in terminal and deployed my html. After deploying, I verified that it is working correctly through browser. Now i copied echo.php file from lab1 to lab2 using cat command. Then I have included the basic form in html code(fig-2) of http request methods GET and post. I have tested it in the browser by giving input in the text box and the output screenshots (fig-3) are attached below. 
<br>

![Basic HTML Code](images/1.png) 

<br>

![Basic HTML Code Output](images/2.png) 

## B.Simple Javascript

  - 1. I have included inline javascript code (fig-4) in html tags to display current time and date when clicked on it and also inlcuded a coonsole log statement code to view the action whenever the input is typed in text box log statement is printed in the console (fig-5) . Here are the screenshots of code and output (fig-6).

  <br>

![Inline Javascript code](images/5.png) 

<br>

![Inline Javascript Forms Output](images/7.png) 

<br>

![Inline Javascript code Output](images/8.png) 




  - 2. I have included javascript code in a <script> tag to display a digital clock (fig-7) here is the code and the output(fig-8).

  <br>

![Digital clock code](images/6.png) 

<br>

![Digital clock code output](images/7.png) 

  - 3. I have written javascript code in a javascript file email.js and included the path file in madishsn.html file and wrote a code to show/hide my email address when clicked(fig-9). The output is displayed below(fig-10)

  <br>

![Show/hide Email code](images/12.png) 

<br>

![Show/hide Email Code Output](images/9.png) 


<br>

  - 4. I have written code to display analog clock using an external javascript code and displayed the analog clock in the browser. Here is the code (fig-11) and output (fig-12).

  <br>

  ![Analog clock code](images/11.png) 

  <br>

![Analog clock code output](images/10.png) 



## Task 2 - Ajax, CSS, jQuery and web API integration

- **A.Ajax**   

- After the form, I've added an input tag for user input, a submit button, and a div element for JavaScript code(fig-13). In addition, I developed a method called getEcho() for request handling, which verifies the input length before processing a request. To handle the asynchronous request, I've set up an onreadystatechange function and constructed an Ajax object. In the event that the request is successful and the readiness state is 4, the response text is printed. The echo.php file is used to handle the initialized GET request in the code I wrote to generate and send an Ajax request to the server. Without requiring a page reload, the xhttp.open function opens a channel of communication with the server to facilitate data exchange.  Echo.php efficiently handles GET requests, guaranteeing that the client-side request's payload is handled and processed correctly. The getecho function's code the GET request, ensuring proper handling and processing of data from the client-side request. After sending a request, I started a fresh capture and saw the console window show the answer. Later, I saw dynamic changes in the console response messages and the execution count, which changed each time the request was run. I also examined the echo.php response and discovered the status code of 200(fig-14), indicating successful handling of the request.


<br>

![Ajax getEcho function code](images/13.png) 

<br>

![Ajax Request code Output](images/15.png) 



- **B.CSS**

- While internal CSS is incorporated into the HTML document, inline CSS is applied directly to particular HTML components. External CSS is applied through a different file that is connected to the HTML. For better styling, I applied a different style sheet to the HTML page using an external CSS. I have also added a remote CSS file that was given in class to the head tag of the HTML page. Aligned the HTML code with the external CSS and placed various div tags inside the main div container according to the external CSS's defined structure. After that, I included an internal CSS style for the ajax request button in the head tag. altered the value from submit to Ajax Echo and added the class name to the ajax input button. I also applied a powder blue background color to the body and a blue h1 tag to the style tag in the head tag, which is an internal CSS stylethe value from submit to Ajax Echo. The code of css is included below (fig-15,16) and output is displayed below (fig-17)


<br>

![CSS code](images/16.png)

<br>

![CSS Code](images/17.png)

<br>

![CSS Code Output](images/18.png)

 **C.jQuery**

- jQuery is a well-known JavaScript library that makes chores easier and streamlines interactions with APIs. To enable jQuery functionality, I have copied the jQuery script into the head section. I have included JQuery Ajax code below(fig-18,19)

<br>

![JQuery Ajax Code](images/19.png)

<br>

![JQuery Ajax Code](images/20.png)

- **1.jQuery $.get():** 

- In addition, I've included a new button that, when clicked in response to an Ajax GET request, calls the jQueryAjax() function. The jQueryAjax() function retrieves entered data and uses the length function to make sure it is not empty. It utilizes a jQuery selector to access echo.php, reads input from the container, and prints back the response on the page using the #response id.(fig-20)

<br>

![JQuery Ajax Code Get Output](images/21.png)
 
- **2.jQuery $.post():** 

- I made a new button that, when clicked, causes the jQueryAjaxPost() function to be activated. It looks like the previous button. I have created the jQueryAjaxPost() function to handle an Ajax POST request and print the response. I used a jQuery selector to access echo.php, read the input from the container, and printed back the response using the #response id in order to validate the data. I also fetched the entered data into a variable(fig-21). 

 <br>

![JQuery Ajax Code Post output](images/22.png)


- **D. Web API integration**
 

- I used jQuery to perform API Integration; with it, you can easily integrate a number of free APIs into an HTMP page. This involves integrating a joke API by launching an Ajax request and displaying the resultant random joke. In order to retrieve data from the Joke API, I have integrated an Ajax request code into an already-existing script tag (fig-22). and formatted the returned data using JSON after retrieving the API response using jQuery's $.get() function. Whenever the page is reloaded, the request is automatically executed. The code and output screenshots are below. After a browser refresh, I examined the network pane. The status in request windows is 200 ok, and the response tab shows the fetched api code. Whenever a browser is reloaded, a random joke is fetched and printed in the console window as API code(Fig-23). 

<br>

![Random Joke code](images/23.png)

<br>

![Random joke code output](images/24.png)

- I have also retrieved an API for estimating age based on name.I started by creating an input button called guess age, which when clicked will launch an API. To run an api when the input button is clicked, I created an input button called guess age. Then, I created an async function called guessAge. I used the javascript method fetch() to fetch results across the network, and it returned a promise(Fig-24).

<br>

![Name and Age Output](images/25.png)

