import Navigation from './Navigation'

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
  </>
)
}

export default Layout
