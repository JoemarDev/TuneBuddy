import './app-menu-child.styles.scss';
const AppMenuChild = ({name , icon , ...other} ) => {
    return (
        <div  {...other}>
            <div className='app-menu-icon'>{icon}</div>
            <span className="text-sm font-medium">{name}</span>
        </div>
    )
}

export default AppMenuChild;