import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';


export function Post({author, publishedAt}) {
    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt="" />
                    <div className={styles.authorInfo} >
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="" dateTime='2022-11-22 08:13:30'>
                    {publishedAtFormatted}
                </time>
            </header>

            <div className={styles.content}>                
                <p>Fala galeraa 👋 </p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
                <p><a href=''>jane.design/doctorcare</a></p>
                <p>
                    <a href=''>#novoprojeto </a>
                    <a href=''>#nlw </a>
                    <a href=''>#rocketseat </a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}