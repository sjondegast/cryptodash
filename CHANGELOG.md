#changelog

##Ideas - improvements after course
- styled-components restructure to regular css/scss because i don't like it!
- Learn react context api
- CoinGrid -> settings .slice 0, 100 select a range!! 

### Final version cryptodash improvements/changes!!
- Clone current project first - redesign
- First make a branch before starting with changes, for example restructure app, components and file(names)
- for example change shared folder to global, index === app.js | settings dir with all components for the settings page. | global or shared is fine with
- change styled components to scss, see the scotch.io site for this with create-react-app
- change filenames to my own conventions, don't like the way it's been done!!
    - for example styles dir, inside here we make the components and the styles.
    - also make a base file and a settings file for the scss, maybe a file in there with md extention with conentions etc.
    - for this project probably best to first change the file/component names and test it
    - then copy all the styled component styles to the style-conventions.md file and from there make the scss files per component and work my way through it.
    - then make a redesign, don't like the colors and the layout that much eather.
- put the react app inside a express back-end and put it up on heroku

##Changes
- cleaned up code create-react-app boilerplate
- created git repo cryptodash
- npm install --save styled-components@4.0.2
- played around with styled components - https://www.styled-components.com/
- created settings page
- added react context (redux like but from react, its new and it uses the new context api from react)
- added setting dir for welcomemessage and added logic to give massage if firstVisit etc. 
- npm install --save cryptocompare
- created cryptocompare login user: sjondegast@gmail.com | wachtwoord: 21011987
- added cryptocompare to AppProvider to fetch the coinList


##LessonsLog
- how does the context work and is it better then redux?!
Redux uses the old context api of react, but it has some bennefits like debug tools and others.
In some cases Redux is still the way to go, and others it's better to use react context api.
- css you can create grids inside of grids
- make list of libraries that i used and and order/search them by problem to solve. for example lodash
- ...this.state.favorites === spread operator, learn more about it and how it works.
    let favorites = [...this.state.favorites]; this makes a copy of the array and sets the let variable to that value, in this case the array comming back from the state.
- object destructuring!! 

## Questions
- how to avoid not using constructor function
- styled-components vs normal scss / css?!
- create-react-app webpack config, babel etc. config files zie documentatie voor scss en sass etc. 