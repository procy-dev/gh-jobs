import React from 'react';
import useFetchJobs from './hooks/useFetchJobs';
import { Container } from '@material-ui/core';

const App = () => {
    const { jobs, loading, error } = useFetchJobs();
    console.log('jobs', jobs, loading, error)
    return (
        <Container>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error. Try refreshing</h1>}
            <h1>{jobs.length}</h1>
        </Container>
    );
}

export default App;
