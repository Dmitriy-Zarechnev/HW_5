import s from './Loader.module.css'
import rocket from './rocket.gif'

export const Loader = () => {
    return <img className={s.loader} src={rocket} alt={'Rocket anim'}/>
}

