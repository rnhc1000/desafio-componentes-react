# DSCommerce - FrontEnd ReactJS-based Challenge - ReactJS Professional - @devsuperior -
ReactJS Professional Challenge on Static Components 
- Components
- Routes
- Yarn
- Vite
## _Table of contents_
- [Overview](#overview)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I practiced](#what-i-practiced)
- [Continued development](#continued-development)
- [Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
## _Overview_
The design is structured as shown:
- src|
    - assets|
    - components|
        - CardCar
          - index.tsx
          - styles.css
        - CommentCard
        - FooterCar
        - HeaderCar
   - routes
        - CarIndex
   - App.tsx
   - index.css
   - main.tsx
   - index.html
   - tsconfig.json
   - tsconfig.node.json
   - vite.config.js
   - yarn.lock
- public|

## _Screenshot_
[![](./DSCommerce-frontend.png)]()
## _Links_
- Live Site URL: [] 
## _Built with_
| Git | ReacJS | Vite | Yarn | TypeScript | JavaScript | Visual Studio
|----------|----------|----------|----------|----------|----------|----------|
 ![](https://ferreiras.dev.br/assets/images/icons/git-scm-icon.svg) | ![](https://ferreiras.dev.br/assets/images/icons/react.svg) | ![](https://ferreiras.dev.br/assets/images/icons/vite.svg) | ![](https://ferreiras.dev.br/assets/images/icons/yarn-title.svg) | ![](https://ferreiras.dev.br/assets/images/icons/ts-logo.svg) | ![](https://ferreiras.dev.br/assets/images/icons/icons8-javascript.svg) | ![](https://ferreiras.dev.br/assets/images/icons/icons8-visual-studio-code.svg)  

 ## _What I practiced_
```jsx

import './styles.css';


export default function HeaderCar() {

    return (
        <div className="header-car">
            <h1>DSCarrosTop</h1>
        </div>
    );
}

``` 
```tsx
import './styles.css';
import HeaderCar from '../../components/HeaderCar';
import CardCar from '../../components/CardCar';
import CommentCard from '../../components/CommentCard';
import FooterCar from '../../components/FooterCar';

export default function CarIndex() {

   return (
      <>
         <HeaderCar />
         <main>
            <h1 className="car-title">Venha nos visitar</h1>
            <CardCar />
            <CommentCard />
         </main>
         <FooterCar />
      </>
   );

}

``` 

## _Continued development_
- Next challenge: Moving forward 
### _Useful resources_
- [https://reactjs.org] React lets you build user interfaces out of individual pieces called components!.
- [https://yarnpkg.org/] Open-source package manager used to manage dependencies in  JavaScript.
- [https://vitejs.dev/guide/] Build tool that aims to provide a faster and leaner development experience for modern web projects.
## _Author_
- Website - [https://ferreiras.dev.br] 
## Acknowledgments
- @devsuperior