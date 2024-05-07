# **Weekday Task**

**How to run this app?**

 - Clone this project and navigate to /weekday
 - Run `yarn` or `npm install`
 - Run `yarn dev` or `npm run dev`
 - you will see your site running on `localhost:4000`

**Features of this app**

 - This app contains a webpage where you can see the latest job to apply
 - It also gives us thw ability to filter the jobs according to our own criteria
 - It supports infinite scroll, which means more jobs will be loaded as you scroll
 - It is device responsice, i.e. it looks pleasent on every device.

**Coding specifications of this app**

 - Weekday app comes with React-Vite instead of tradition React, which significantly shrinks the bundle size
 - It has a great folder structure with different folders for `components` , `constants`, `pages`, `theme`, `utils` etc.
 - **Instead of inline-styles or any external CSS, this app has a Mui-theme integrated to prevent style repetetion for components with a very clean and maintainable struture.**
 - Most of the coding standards are being followed which is recommanded at high level, including Airbnb's style guide.

**What can be improved**
There are a lot of things this in this app which still can be improved like,

 - Functioning of filters can be improved,
 - We can use React Query to improve working with apis,
 - We can use `react-window` to limit rendering the cards user is watching,
 - We can use `react-signals` state management instead of React's traditional to improve performance.
 - If app will have more pages, we can imtegrate Lazy Loading
 - In weekday's current app, which is live, an external library is being used for filters dropdown. But we can customise the theme of current Material Ui Autocomplete to achieve the same.

**Why a lot of improvements are sill needed?**
The purpose of above section is to showcase my skills to improve the performance of the app. Being a full-time software enginner and working at side projects takes most of time which is the reason some of the functionalities are still yet to integrate.

But after showcasing **what can be improved** I want to demonstrate to be able to implement this functionality is given proper time, as currently, I can spare a very little time to this compared to a full time job. 
