import React, { act, useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {initialState, reducer} from'../../store'
import { numberAdd2, login } from '../../store/actions'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span> :
                    <span className="text">sem usuario</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => login(dispatch, 'Matheus')}>Login</button>

                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberMultiply7' })}> *7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberDivider25' })}>/25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberParser' })}>Parser</button>
                    <input type="text" className="input" onChange={e => dispatch({ type: 'addNumber' , n: +e.target.value})} />


                </div>
            </div>
        </div>

    )
}

export default UseReducer
