import { useState, useEffect } from "react"
import { getSearchItems } from '../../services/API_Handler';
import SuggestSearchResult from './SuggestSearchResult';

export default function SearchField() {
    const [listItems, setListItems] = useState([]);
    const [loading, setLoading] = useState(true); //loading from the beginning (true)
    const [error, setError] = useState(null);

    useEffect(() => {
        if(listItems.length > 0) return;
        const fetchData = async () => {
            try {
                const data = await getSearchItems();
                setListItems(data); //setListItem from data, to store the searchitems/options we want to be able to search for.
                setLoading(false); //only when the data is done will it be false and not display loading.
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

    return(
        <>
            <SuggestSearchResult listItems={listItems} />
        </>
    );
}
