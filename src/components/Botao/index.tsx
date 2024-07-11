import React, { ReactElement } from "react";
import './style.scss'

export default class Botao extends React.Component<{children:string | ReactElement}>{
    render() {

        return(
            <button className="botao">
                {this.props.children}
            </button>
        )
    }
}