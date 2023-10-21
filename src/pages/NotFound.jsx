import { Helmet } from "react-helmet";

function NotFound() {
    
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
       <Helmet>
        <title>404! Not Found</title>
      </Helmet>
  <h1 className='text-6xl mb-6'>404 - Page Not Found</h1>
  <p>Sorry, the page you are looking for does not exist.</p>
</div>

  );
}

export default NotFound;
