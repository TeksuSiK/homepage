import Navigation from './Navigation'
import Footer from './Footer'

interface Props {
  children: React.ReactNode;
}

const Layout = ({children}: Props) => {
return (
  <>
    <Navigation />
    <div className="w-full flex justify-center relative">
      {children}
    </div>
    <Footer />
  </>
)
}

export default Layout
