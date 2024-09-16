import './App.css'
import ClassBasedComponent from './components/class-based-component'
import ContextButtonComponent from './components/context-concept/button';
import ContextTextComponent from './components/context-concept/text';
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'
import UseReduserExamplee from './components/use-reduser-example';
import Users from './components/users';

const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];

function App() {
  return (
  <div>
    <h1>React JS Concept 2024</h1>
    {/* <ClassBasedComponent/> */}
    {/* <FunctionalComponent/> */}
    {/* <ProductList listOfProducts={dummyProductData} name ="Asan" city="ABC"/> */}
    {/* <Users/> */}
    {/* <ContextButtonComponent/>
    <ContextTextComponent/> */}
    <UseReduserExamplee/>

  </div>
  )
} 

export default App
