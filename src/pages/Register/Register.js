import "./Register.css";

const Register = () => {
    return(
        <div className="register">
            <h2>
                Register
            </h2>
            <p>Crie seu usuário e comece a publicar!</p>
            <form>
                <label>
                    <span>Nome: </span>
                    <input 
                        type="text"
                        name="displayName"
                        required
                        placeholder="Nome do usuário"
                    />
                </label>
                <label>
                    <span>E-mail: </span>
                    <input 
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail do usuário"
                    />
                </label>
                <label>
                    <span>Senha: </span>
                    <input 
                        type="password"
                        name="password"
                        required
                        placeholder="Insira sua senha"
                    />
                </label>
                <label>
                    <span>Confirme sua senha: </span>
                    <input 
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Confirme sua senha"
                    />
                </label>
                <button className="btn">Registrar-se</button>
            </form>
        </div>
    )
}
export default Register;