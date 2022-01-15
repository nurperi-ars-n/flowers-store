import classes from '../../assets/styles/Login.module.css'

export default function LoginForm(props) {

    return <div className={classes.inputs}>
            <input placeholder="Email Adress"/>
            <input placeholder="Password"/>
        </div>
}