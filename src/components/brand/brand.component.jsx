import './brand.styles.scss';
import { Link } from "react-router-dom";
const AppBrand = () => {
    return (
        <Link to={'/'}>
            <div className='app-brand'>
                <img src={`${process.env.PUBLIC_URL}/images/logo/logo.svg`} alt="app-logo" />
            </div>
        </Link>
    )
}

export default AppBrand;