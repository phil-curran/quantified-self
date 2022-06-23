**Name of Student:** Phil Curran

**Name of Project:** Quantified Self

**Project's Purpose or Goal: (What will it do for users?)**

This will be a database-connected, SSO-enabled, externally deployed, ‘quantified self’ / habit tracker / journal app made with React that lets you define and track several types of biometric and habit-adherence data, and view it over time using data visualization (d3.js).

This app will have three main 'archetypes' for features:

1. Journaling App: This portion will be a text-entry journaling app that will allow users to record qualitative data.  This data will be searchable and taggable.  This data will be stored in a database (NoSql).  This journaling app model will be used for 1) a Dream journal (recording dreams, tags for people, places, things, themes, etc.) and 2) entering, tagging, and searching qualitiative data as a feature of other 'archetypes.'

2. Data Tracking: a form-driven interface for tracking quantitative data.  This data will be stored in a database (NoSql).  This data tracking model will be used for tracking physical and biometric data (weight, height, calories consumed, sleep quality, etc.).  This data will be viewable over time using data visualization (d3.js) and show aggregate data over time, trendlines, etc.

3. To Do List: This will function as a day planner, daily 'to do' list, and schedule minder, for the sake of tracking the acquisition of habits over time (working out, meditation, etc.).  You can add new habits and set them to repeat on a custom schedule (daily, Mondays, Workdays, Saturdays, etc.).  A daily retrospective allows you to track the degree to which you've completed the tasks on your 'to do' list / habit builder, and track progress over time.

**List the absolute minimum features the project requires to meet this purpose or goal:**

1. One interface will have a running journal-like app, where you can enter or edit qualitative data, timestamp it's submission, and include tags (i.e. professional development, travel, hobbies, etc.).  This interface will have a search field that lets you search by keyword, tag, date or date range, etc.

2.  Another interface will allow you to define a custom dataset (i.e. sleep quality data), enter data for a given day or timeframe, and have an aggregate data view / visualization update as you add data.

3.  The final interface will allow you to define a custom 'to do' list for a day and have that list of 'to do' items repeat on a custom schedule (e.g. so I can include habit-building tasks on my to do list on Monday - Friday, but not the weekends). 

**What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.**

I plan to use React and a yet-to-be-determined CSS or React Component Framework for front-end.  I plan to use Firebase for hosting the app and authentication, and Firestore for hosting the data.

**If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.**

Obsidian is an open-source personal knowledge management tool, and allows you to develop your own React components for use within the app, so a stretch goal is to create a custom React component for each of the aspects of the app that connect to a database and/or a backend API.

**What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?**

React
React Component Library
Firebase / Firestore
Firebase Authentication
D3.js for data visualization
ElasticSearch?

**Is there anything else you'd like your instructor to know?**

I got the inspiration for this project from tools like Notion and Obsidian, which are like self-built wikis for personal knowledge management.  I want to bring together a personal productivity strategy I've developed over the years and rework it as a custom app (currently lives in Google Docs), and fold it into another app like Obsidian that lets you create personal knowledge wikis, and catalog resources (tutorials, code snippets, links, etc.).