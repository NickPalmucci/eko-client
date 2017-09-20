import React from 'react';
import SnackBar from 'react-toolbox/lib/snackbar';


export default function ErrorSnackBar({active, message, hideSnackBar}) {

    return (
        <section>
            <SnackBar
                action='Ok'
                active={active}
                label={message}
                onClick={hideSnackBar}
                type='cancel'
            />
        </section>
    )
}