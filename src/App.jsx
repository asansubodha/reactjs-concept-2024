import './App.css'
import ClassBasedComponent from './components/class-based-component'
import ContextButtonComponent from './components/context-concept/button';
import ContextTextComponent from './components/context-concept/text';
import FormComponet from './components/form';
import FunctionalComponent from './components/functional-component'
import LoginComponent from './components/login';
import ProductList from './components/products'
import RegisterComponent from './components/register';
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
    {/* <UseReduserExamplee/> */}
    {/* <FormComponet/> */}
    <div style={{display: 'flex', gap:'20px'}} >
      <LoginComponent/>
      <RegisterComponent/>
    </div>

  </div>
  )
} 

export default App
