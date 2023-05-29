import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className={styles.createPost}>
            <h2>Create Post</h2>
            <p>
                Escreva sobre e compartilhe o que quiser.
            </p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>título: </span>
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder="O título do seu post"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>Url da imagem: </span>
                    <input
                        type="text"
                        name="image"
                        required
                        placeholder="Insira a imagem que deseja utilizar"
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                    />
                </label>
                <label className={styles.content}>
                    <span>Conteúdo: </span>
                    <textarea
                        name="body"
                        required
                        placeholder="Insira o conteúdo do post"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    />
                </label>
                <label>
                    <span>Tags: </span>
                    <input
                        type="text"
                        name="tags"
                        required
                        placeholder="Insira as tags separadas por vírgula"
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    />
                </label>
                <button className="btn">Publicar</button>
                {/* {!loading && <button className="btn">Registrar-se</button>}
                {loading && (
                        <button className="btn" disabled>
                            Aguarde...
                        </button>
                    )}
                {error && <p className="error">{error}</p>} */}
            </form>
        </div>
    )
}
export default CreatePost;