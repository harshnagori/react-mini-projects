import Navbar from "./Navbar"
import PageContent from "./PageContent"

const Section1 = (props) => {
  return (
    <div className="h-screen w-screen">
      <Navbar/>
      <PageContent users={props.users}/>
    </div>
  )
}

export default Section1