import React, {useState, useEffect, useRef} from 'react'

function ToDoForm(props) {

    //input
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = e => {
        setInput(e.target.value);
    };
    //input

    /*text area
    const [inputArea, setInputArea] = useState(props.edit ? props.edit.value : '');

    const inputAreaRef = useRef(null);

    useEffect(() => {
        inputAreaRef.current.focus();
    })

    const handleChangeArea = e => {
        setInput(e.target.value);
    };

    //text area*/
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input 
                        type='text' 
                        placeholder='Atualizar' 
                        value={input}
                        name='text'
                        className='todo-input edit'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className='todo-button edit'>Atualizar</button>
                    
                </>
            ) : (
                <>
                    <input 
                    type='text' 
                    placeholder='Adicionar uma tarefa' 
                    value={input}
                    name='text'
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef}
                    />
                    
                    <button onClick={handleSubmit} className='todo-button'>Adicionar</button>
                    
                </> 
           )}

            
        </form>
    );
}

export default ToDoForm
