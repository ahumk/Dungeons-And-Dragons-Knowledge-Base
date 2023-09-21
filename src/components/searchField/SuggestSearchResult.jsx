//DOC Note: Basic suggestion setup from blueprints slightly modified

import { useNavigate } from 'react-router-dom';

import { Button, CardList, MenuItem } from '@blueprintjs/core';
import { Suggest } from '@blueprintjs/select';

function filterItem(query, item, _index, exactMatch) {
    const normalizeditemName = item.name.toLowerCase(); //normalises the name of the list item (ie search options)
    const normalizedQuery = query.toLowerCase(); //normalises the query for the user (ie what they are searching for (what you write in the searchfield will be your query))

    if (exactMatch) {
        return normalizeditemName === normalizedQuery; //if exactMatch (build in function) is true - normilizeditem is normalizedquerry (so it displays the exact match of the search) 
    } else { //else displays all the items the search could be true for (ie all options with 'a' will be displayed if you search a) if there is more than one letter of the searchquery in the itemname(it becomes true)
        return `${normalizeditemName}`.indexOf(normalizedQuery) >= 0;
    }
}

function renderListItem(item, {handleClick, modifiers, query}){
    if(query.length >= 1){ //checks if the query is longer than 1 character 
        if (!modifiers.matchesPredicate) { //if the item doesn't match
            return null; //the query return null
        }
        return ( //otherwise returns a button with the items name
            <Button className='search-item bp5-minimal' 
                    active={modifiers.active} 
                    disabled={modifiers.disabled} 
                    onClick={handleClick} 
                    key={item.type + ',' + item.name}
            >
                <p>{item.name}</p>
            </Button>
        );
    }
}

function renderInputValue(item) { 
    return item.name; //returns the items name
} 

function renderItemList({ items, itemsParentRef, query, renderItem, modifiers}) {
    const renderedItems = items.map(renderItem).filter((item) => item !== null ); //creates a list of items to be rendered based on previous filtering
    
    return (//returns a list of buttons with all the items from renderedItems
        <CardList ref={itemsParentRef} className="bp3-elevation-2" id='search-list'>
            {renderedItems}
        </CardList>
    );
}

export default function SuggestSearchResult({listItems}) { //export the suggest search result component
    const navigate = useNavigate(); //uses the useNavigate hook, from react router, to create a navigator, for handling refresh-less page navigation

    function onItemSelect(selection) { //handle the selection of an item
        navigate("/" + selection.type + "/" + selection.index); //concatenates the url from the selection and navigates to the item's page
    }
    
    return(
        <>
            <Suggest 
                items={listItems} 
                itemPredicate={filterItem} 
                itemRenderer={renderListItem} 
                itemListRenderer={renderItemList}
                inputValueRenderer={renderInputValue}
                fill={true}
                onItemSelect={onItemSelect}
            />
        </>
    );
} 