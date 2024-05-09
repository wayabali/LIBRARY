import './Styling.css';
import Content from '../component/Content';
import Header from '../component/Header';
import Footer from '../component/Footer';



export default function Home_page(){
  return(
    <>
    <div className='wrap'>
    <Header />
    <Content />
    <Footer/>
    </div>
    </>
  );
}