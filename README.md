# DCIT 205 IA
## Kwabena Owusu-Darko - 11170189

As part of our Interim Assessment for DCIT 205 (Multimedia and Web Design), we were tasked with creating a website for out department.

This is a simple ten-page website modeled after the [website](https://dcs.ug.edu.gh) of the Department of Computer Science at the University of Ghana.

Though it shares many things with the original, I would like to think I've given it a [fresh coat of paint](https://www.figma.com/file/DhpahaH1pht2FAa5YD8eJc/DCIT_205?type=design&node-id=26%3A466&mode=design&t=e5xxNr1AvhmhTCME-1).


---
## Quick Start (In any terminal of your choice):
```
mkdir DCIT205_11107189
cd DCIT205_11170189
git clone https://github.com/kodditor/11170189_DCIT_205_IA
cd dcit-205-ia
npm install
npm start
```
---



As per instructions, there are 10 distinct pages:
1. The Home Page
2. The About Page
3. The Contact Page
4. The Programs Page
5. The Program Details Page
6. The Student Projects Page
7. The Student Project Details Page
8. The Faculty Page
9. The Faculty Details Page
10. The Events Page
---

Since this is built using React, each page has a corresponding React component that is routed through the React-Router Package.

Leveraging React's code reusability feature, each page import certain components that persist on all pages: the header, footer and "discover" components.

To maintain referential integrity, all forms of object/data used throughout the application are stored in the data.js file.

Here's a rundown of each Page (with screenshots):


---

# Home Page
![Home page](/assets/home.png)


# About Page
![About page](/assets/about.png)

# Contact Page
![Contact page](/assets/contact.png)

# Programs Page
![Programs page](/assets/programs.png)

# Program Details Page
![Program Details 1](/assets/program_details_1.png)

![Program Details 2](/assets/program_details_2.png)

# Student Projects Page
![Student Projects page](/assets/projects.png)

# Project Details Page
![Project Details page](/assets/project_details.png)

# Faculty Page
![Faculty page](/assets/faculty.png)

# Faculty Details Page
![Faculty Details page](/assets/faculty_details.png)
: )
# Events Page
![Events page](/assets/events.png)


## What I learned from the project

Due to the rapid advancements in Javascript, knowledge of HTML and CSS goes a long way in a developers lifecycle. This project exposed me to the different uses of the tech stack, it's cross-platform applications through libraries and frameworks like React, NextJS, Angular, React Native and Electron, while giving me aglimpse into how enterprise web applications are built using tools like Git and Github.








