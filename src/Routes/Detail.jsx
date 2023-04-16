import { useEffect } from 'react';
import DetailCard from '../Components/DetailCard/DetailCard';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('@token');

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, []);

    return (
        <>
            <DetailCard />
        </>
    );
};

export default Detail;