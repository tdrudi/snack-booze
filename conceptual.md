### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
Mapping between URL bar and page user sees.


- What is a single page application?
A website that loads a single document and updates the content with new data instead of reloading the page.


- What are some differences between client side and server side routing?
Client side: routing in the browser.
Server side: routing on server.

- What are two ways of handling redirects with React Router? When would you use each?
useNavigate hook: example - submitting a form and redirect back to homepage
Naviage component: a user access a page they shouldnt be on


- What are two different ways to handle page-not-found user experiences using React Router? 
Navigate component back to homepage,
404 component for a specific page to show


- How do you grab URL parameters from within a component using React Router?
useParams hook.


- What is context in React? When would you use it?
Universal data that is accessible across all components. If something is create high up but is needed farther down and the components between dont need it.


- Describe some differences between class-based components and function
  components in React.

Cass-based components: classes made up of multiple functions, extend from react, must have render method, stateful components.

Function components: javascript gunction that accepts props and returns element, stateless components.

- What are some of the problems that hooks were designed to solve?
let you use state and other React features without writing a class, hook in any of our components and test it easily in isolation, fewer lines of code, no need for render props or higher order components.
