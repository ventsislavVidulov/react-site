import { useContext } from 'react';

import { JokeContext } from '../../contexts/JokeContext';
import * as jokeService from '../../services/jokeService';

const CreateJoke = () => {
    const { jokeAdd } = useContext(JokeContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const jokeData = Object.fromEntries(new FormData(e.target));

        jokeService.create(jokeData)
            .then(result => {
                jokeAdd(result)
            });
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Joke title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter joke title..."
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                    />
        
                    <label htmlFor="summary">Joke:</label>

                    <textarea name="summary" id="summary" defaultValue={""} />

                    <input
                        className="btn submit"
                        type="submit"
                        value="Create Joke"
                    />
                </div>
            </form>
        </section>
    );
};

export default CreateJoke;
