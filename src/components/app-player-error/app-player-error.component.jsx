import { useDispatch } from 'react-redux';
import { IsPlayerHaveError } from '../../store/player/player.action';
import './app-player-error.styles.scss';

const AppPlayerError = () => {

    const dispatch = useDispatch();

    const CloseError = () => dispatch(IsPlayerHaveError(false));
    return (
        <div className="app-player-error bg-blue-500 px-10 py-5" onClick={CloseError}>
            <label className='text-slate-100'>
                Tunebuddy can't play this right now. Please try again later.
            </label>
        </div>
    )
}

export default AppPlayerError;