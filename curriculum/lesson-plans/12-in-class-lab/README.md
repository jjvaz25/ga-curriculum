# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) In-class Lab: Feedr

>Note: This class session is intended to help students begin the [Unit 2 Feedr project](../../projects/unit2/project-02.md). Since this is a challenging project, the objective of this lesson is to ensure that all students are set up and know how to get started on the project.


| Timing | Type | Topic |
| --- | --- | --- |
| 10 min | [Overview](#overview) | Overview |
| 15 min | [Questions](#questions) | Questions |
| 40 min | [Independent Work](#lab1) | Independent Work |
| 5 min | [Check In](#checkin1) | Check In |
| 60 min | [Group Work](#lab2) | Group Work |
| 5 min | [Check In](#checkin2) | Check In |

## Objectives

* Familiarize yourself with the API documentation news sources .
* Learn how to parse through API documentation.
* Understand how to successfully retrieve information from APIs.
* Fork and clone your starter code.
* Strategize ways to hide the loader and replace the content of the `#main`
container with that of the API.
* Look up other news sources that might be useful for the project.
* Understand how to implement handlebars in the project (optional for the final product).

<a name = "overview"></a>
## Overview (10 min)

For today's class you'll be getting your Feedr project set up.Our feed reader will pull feeds from our favorite blogs. The user will be able to
filter between publications through the dropdown on the header menu.
Clicking/tapping on one of the articles will load a pop up with more
information. The user from that point will be able to either dismiss the
additional information or go to the referenced article.

This will be our first single page app. All of our application views will be
contained in the provided [index.html](../../projects/unit2/) file. Our task, after we pull from the
respective feed APIs, will be to toggle the appropriate classes and content for
the provided site architecture.

You'll give the user the ability to pull from multiple news sources. Here is an example of Reddit:

- [Reddit: https://www.reddit.com/top.json](https://www.reddit.com/top.json)

Get started by opening up the [Unit 2 project starter code](../../projects/unit2/).


### Getting Started

Begin by looking at the starter code [here](https://github.com/generalassembly-studio/JS-Unit-2-Project-Starter-Code). Make sure you have the starter code on local machine:

```
$ git pull upstream master
```
Remember to commit as you complete different functions and features:
```
$ git add .
$ git commit -m "A description of what was added"
$ git push -u origin master
```


## Suggested Ways to Get Started

> Below are some more specific ways for ways in which you can help students get started on the project.

  - Start by adding all the DOM functionality first.
  - Map out all of the needed fields/properties from each respective feed.
  - Start by doing a `console.log` of the incoming feeds to confirm you have a
    successful transaction before you start mapping anything out.
  - Make sure you have the [JSON View chrome extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
    to get a clean view of the JSON dump in your browser.
  - Think about ways to best standardize all of your incoming data.
  - Test small pieces of functionality frequently, to make sure everything is
    working.
  - Use tools such as Stack Overflow, Google and documentation resources to solve
    problems.

---

<a name = "questions"></a>
## Questions & Review (15 min)

Feel free to ask any questions that was unclear or any topics in need of review. If there aren't any, either feel free to stay and listen to other students' questions or work on your project 2. 

---

<a name = "lab1"></a>
## Independent Work (40 min)

Try getting things set up on your own first, we will break out into groups after and discuss the different obstacles you are facing. 

Feel free to get started however you like. Do not feel pressured to code right away, for example if you wanted to read up on API documentation first.

---

<a name = "checkin1"></a>
## Check In (5 min)

A quick check in to see how things are going and remember take your breaks!

---

<a name = "lab2"></a>
## Group Work (60 min)

The class will break out into groups of 4 and work together to see if you can debug and colaborate on different ideas. Feel free to talk about:
* Approach (like how did you start, share psuedocode, etc.)
* APIs you are using (any others than provided above)
* HTML/CSS tips

---

<a name = "checkin2"></a>
## Check In (5 min)

A quick check in to see how things are going and remember take your breaks!