import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ItemTreat from '../ItemTreat/ItemTreat';



// import Grid from '@material-ui/core/Grid';


function ListTreat() {

    const dispatch = useDispatch();
    const treats = useSelector((store) => store.treatReducer);
    const history = useHistory();

    useEffect(() => {//triggers saga getting all treats from DB on page load
        dispatch({ type: 'FETCH_TREATS' });

    }, []);

    console.log('after useEffect', treats);

    return (
        <main>
            <h3 className="header">I am treat list</h3>
            <section>
                {/* <Grid
                    container
                    spacing={2}
                    direction="row"
                    alignItems="flex-start"
                    justify="flex-start"
                    style={{ minHeight: '100vh' }}> */}

                {treats?.map((treat, i) => {
                    return ( //loops thru array of treats to create each treat item
                        <ItemTreat
                            key={i}
                            treat={treat}
                        />);
                })}

                <button onClick={ () => {history.push('/treatForm')}}>Add Treats</button>

                {/* </Grid> */}
            </section>
        </main>

    );
}

export default ListTreat;