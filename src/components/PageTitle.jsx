import { Link } from "react-router-dom"
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const PageTitle = ({pageTitle, name, link}) => {
  return (
    <div className="py-8 lg:py-10 text-white flex items-center gap-x-3">
          <Link to='/' className="poppins-regular tracking-wider text-lg lg:text-xl flex-wrap ">
            Home
          </Link>
          <span>
            <TbArrowBadgeRightFilled size={29} color="#FF7582" />
          </span>
          <Link to={`/${link}`} className="poppins-regular tracking-wider text-lg lg:text-xl">
            {pageTitle}
          </Link>
      {name && (
        <span>
        <TbArrowBadgeRightFilled size={29} color="#FF7582" />
      </span>
          )}
          <h3 className="poppins-medium tracking-wider text-lg lg:text-xl gr-color">{name}</h3>
        </div>
  )
}

export default PageTitle