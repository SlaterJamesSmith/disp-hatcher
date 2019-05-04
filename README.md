## React DispHatcher
#### _Epicodus Capstone Project, 3/27/19_

#### Slater Smith

### Friday Project Notes (for Epicodus instructors only):
- 8-9:11am: whiteboard component tree
- 9:11-10:00am: building draw.io component tree
- 10am - 11am: building component tree cont'd / planning data storage
- 11am-12pm: planning data storage / white boarding
- 12pm - 1pm: lunch
- 1pm - 5pm: coding

### Description

Application built for React routing and state management practice. The application is meant to act as a worker dispatcher for organizations that need to manage large numbers of contract workers in realtime. Specifically, this app is being built with trade unions in mind, but could be applicable to any industry that needs to efficiently manage, track, and dispatch contract workers or employees (examples: dental professionals, medical, government workers, police dispatch, temp agencies, etc.)

### Component Tree

![Component Tree](./src/assets/images/disphatcher-tree.png)
<img src="./src/assets/images/wb1.JPG" alt="Whiteboarding" width="49.75%"/>
<img src="./src/assets/images/wb2.JPG" alt="Whiteboarding" width="49.75%"/>
<img src="./src/assets/images/wb3.JPG" alt="Whiteboarding" width="49.75%"/>
<img src="./src/assets/images/wb4.JPG" alt="Whiteboarding" width="49.75%"/>

### Roadmap & Stretch Goals
MVP:
- Fully build out Job Builder & Profile Editor components using mock data and mock job lists.
- Deploy to firebase.

Stretch goals:
- Build out Edit Jobs component, and have each job automatically archive after timeout (job call ends).
- In 'Profile Editor' component, add 'search by name' option, and a 'view all' option to choose from
- Add option for user to create new job-types (Rigger, Electricial, Lead Rigger) and sort by them.
- Add preset job-types for different industries (Stagehands Union, Electricians Union, etc.)
- Add ability to upload excel sheet list of workers, then delete mock data
- Add functionality to send emails

#### Database map:

Master list data:
- First name
- Last name
- Email
- Proficiencies / Skills
- Notes / General
- Exclusions
- Hire Date / Seniority
- List Number / Seniority

Data / job specific:
- Notes / This Job
- Job assignment
- Availability (warning pops up if assigned to conflicting job)
- Offer sent
- Confirmation


### Technologies and Resources Used

* React
* npm & Node
* Redux (to be implemented)
* Jest (to be implemented)

### Setup Instructions

1. Clone this repository to your desktop at https://github.com/SlaterJamesSmith/disp-hatcher
2. Use a terminal of your choice to access the webpage and its files by inputting: "git clone {the above clone link}"
3. If homebrew is not yet installed on your Mac, install it by running the following command in your terminal: "$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
4. If you are not using a Mac, and homebrew is not yet installed, go to the node website and follow appropriate installer for your operating system at https://nodejs.org/en/download/
5. Navigate into your new directory and run '$ npm i' and then 'npm run start'
6. In your preferred web browser, navigate to url 'localhost:8080'

### License

*This software is licensed under the MIT license*
Copyright (c) 2019 **_Slater Smith_**
