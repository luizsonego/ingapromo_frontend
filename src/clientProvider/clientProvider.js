import axios from 'axios';
import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        retry: 3,
    }
});

axios.get('/');

export default queryClient;