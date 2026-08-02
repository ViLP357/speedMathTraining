# speedMath Training
A website for training mental math.
>This is one of my projects for Stardance by Hack club.
>
## ℹ️ Overview
> Note: this project contains currently only the frontend. The backend exists but there isn't much. I might do something with later.

[<img width="500" height="150" alt="TryItBtn" src="https://github.com/user-attachments/assets/810c980c-d8ce-4f16-a109-1d19689a4599" />](https://vilp357.github.io/speedMathTraining/)

(click that button!)


Example of the site with a question (question parameters: operator: +, digits: 1-2). 

<img width="1912" height="616" alt="readyExSite" src="https://github.com/user-attachments/assets/17411e89-b982-4879-bdef-b10f1361b431" />


I wanted to create this website do I could maintain my mental math skills. Nowadays I use a calculator most of the time in math classes and I've noticed I'm not as fast as I used to be in headcounts.

When I started to look for an already existing site, I found many but none of them was exactly what I wanted or needed. So I decided to make my own. 
### Why speedMath Training is different:
- No login
- A good (or at least better) UI
- Questions that are as customizable as possible
- Simple layout
- A cute mascot Calc

## Try It! ▶️
* [https://vilp357.github.io/speedMathTraining/](https://vilp357.github.io/speedMathTraining/)
The website is optimized for a computer screen. It works also on mobile but there might be some issues with responsive design.

## Features
- Question customization:
  - Set min and max for digits.
  - Choose 1-3 of these operators: +, -, and ×
  - Set number of questions
- Gameplay
  - Skip questions
  - Select between moving on to the next question and staying on to a question until correct if wrong answer submitted.
- Dark and light mode
- Timer
- Daily Challenge, which is actually a specific hard coded mode currently.

## How to run 🏃
Clone repository:
```bash
git clone https://github.com/ViLP357/speedMathTraining.git
```
Install depencies:
```
npm install 
```

In main folder speedMathTraining go to...
``` 
/frontend/speedMathTrainingFrontend

```

and

```
npm run dev
```

or

``` 
npm run build
npm run preview
```

## Developing process 💻
This is how the website looked in the beginning of Stardance. There was only that simple question form and some hard-coded questions that I had managed to do in less than 5hr beside configuring everything.

![first](./readmePictures/beginProject.png)

### Some Progress...

<img width="300" height="174" alt="Näyttökuva 2026-06-05 155442" src="https://github.com/user-attachments/assets/cff5d613-d796-4815-a2bd-37779deeee1b" />

### Starting to look good.

<img width="350" height="245" alt="styles" src="https://github.com/user-attachments/assets/60b02729-21d9-4380-bfb9-dff250ef9a52" />

### The ready site on a mobile screen.

<img width="250" height="560" alt="smtMobile" src="https://github.com/user-attachments/assets/471c761c-1279-41ce-9eb5-35a51e542409" />

## Highlight: technical implementation
At some point of developing speedMath Training, I got annoyed by passing react states as props from a parent to multiple children. In some cases the parent didn't even use those React states. That's when I had to discover Zustand. I created a store for child components to use. Now components can get easily game settings (e.g. number of digits) from the store. I still use React state for other things (because it would be too annoying to change everything to use a Store. 


## Technologies 🔧 
### Frontend
- Typescript
- React
### Building-tools
- Vite
### Developing environment
- Node.js
### Drawing
- paint.net
