# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Brief explanation of this application
## What is it?
For my front-end assignment, I created a website with the purpose of requesting information about anime/manga. 

With the following link you can access the app: https://anime-manga-react.vercel.app/
## How is it constructed?
It consists of a header, maincontent, a sidebar, a footer, and several pages. 
With 'Routes' the user can surf to other pages. I also tried to make sure that unnecessary rerenders were not executed (for more info see the explanation of known bugs). 

In addition, I tried to ensure that the application was responsive so that users with smaller screens could also use it. I tried to achieve this by using a drop down menu when the screen is small enough. 

There are 2 pages that have no function because of using a public API, it is more like a visual. 
What I might have done better was to put the index, anime and manga pages in one component and link to the other pages from there. 

## Are there any known bugs?
The API I used for the command does not allow multiple sequences in a given time limit and gives an error code 429. I tried to solve this by using `<routes>` and `<route>` from es6. This ensures that if the user clicks multiple times on e.g. 'Anime' that it is not executed again. (Es5 also has this but with something extra)
I also tried to make sure that when an error code 429 pops up, it is called several times after it, so that the application can be used. To mask this process, I also use a loading screen so that it cannot be noticed by the users.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## How to start

Run the app with `yarn start`.


## How to Test
In this react app I used cypress. If it is not already installed install it with this command `yarn add cypress --dev` and run it with this one `yarn run cypress open`.

In the folder ``cypress\e2e\0-AnimeManga`` can you find the test codes.

## API
I used the JIKAN api v4 (v3 is not beeing supported anymore).
You can find lots of usefull information about the this api on [Jikan](https://jikan.moe/).


## Sign-in/Sign-up
I made visualy the sign-in and sign-up pages. These are not functional. The reason behind it is that I could use open API.

## Extra tech
Ik heb als extra technologie gebruik gemaakt van emailjs, sweetalers2, styled-components.
### EmailJs

EmailJS is a JavaScript library that helps send emails using only client-side technologies. I have used this on the contact-us page, so that users can write down their messages.

### Sweetalers2
sweetalert2 is a visually nicer popup alternative than the standard javascript popups. 

### Styled-components
Styled-components is a popular library used to style React applications. I could also have used tailwindcss but chose to use styled-components because of the ease of use.
