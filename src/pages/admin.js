import { useState } from "react";
import { useRouteError } from "react-router-dom";
import VerticalButtonFormSelector from "../components/verticalButtons";


export default function AdminPage() {
    
    const CHOICES = [ {name: 'List Coffees'}, {name: 'New Coffee'}, {name: 'List Varietals' }, {name: 'New Varietal'} ];
    return (
        <div className="content container">
            <div className="row">
                <div className="col-lg-1">
                    <h1 className="mt-3 text-white bs-light bs-light-text-emphasis">Admin!</h1>
                </div>
            </div>
            <div>
                <VerticalButtonFormSelector CHOICES={CHOICES}/>
            </div>

        </div>
    )
}
