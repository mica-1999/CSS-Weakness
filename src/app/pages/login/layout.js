import { getServerSession } from 'next-auth'; // Allows us to check the session on the server side
import { authOptions } from '/src/app/api/auth/[...nextauth]/route.js';
import { redirect } from 'next/navigation';
import StylesProvider from '/src/app/components/StylesProvider';
import LoginClientWrapper from './wrapper.js';

export const metadata = {
  title: 'Login',
  description: 'Stay updated with the latest blog posts from the portfolio.',
};

export default async function LoginLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/pages/dashboard'); // Redirect if already logged in
  }

  return (
    <>
      <StylesProvider stylesheets={['/assets/css/login/login.css']} />
      
      {/* Layout Content */}
      <div className="container-fluid vh-100">
        <div className="row vh-100">
          <div className="d-flex col-lg-12 w-100 justify-content-center align-items-center">
            <LoginClientWrapper>
              {children} {/* Render the specific login content */}
            </LoginClientWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
