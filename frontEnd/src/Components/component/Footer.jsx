import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footerimg'><img src='/LogoTitle.png' /></div>
      <div className='socialicons'>
        <a href='https://www.facebook.com/profile.php?id=61559332496167'><i className='fa-brands fa-facebook'></i></a>
        <a href='https://www.instagram.com/fikalibrary?igsh=aXhkbnZ1YWJkMGNm'><i className='fa-brands fa-instagram'></i></a>
        <a href='https://x.com/FikaLibrary?t=ZjjAxfVU56D8EDCVWXWeIw&s=09'><i className='fa-brands fa-twitter'></i></a>
        </div>
        <div className='footer-nav'>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About us</a></li>

          </ul>
        </div>
    </div>
  )
}

export default Footer