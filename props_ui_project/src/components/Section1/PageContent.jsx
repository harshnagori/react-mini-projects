import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const PageContent = (props) => {
  return (
    <div className="pb-12 pt-6 flex items-center gap-10 h-[90vh] px-18">
        <LeftContent/>
        <RightContent users = {props.users}/>
    </div>
  )
}

export default PageContent