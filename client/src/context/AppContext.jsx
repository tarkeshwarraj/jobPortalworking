import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const [searchFilter, setSearchFilter] = useState({
        title:'',
        location:''
    });

    const [isSearched, setIsSearched] = useState(true);

    const [jobs, setJobs] = useState([])

    const value ={
        searchFilter,
        setSearchFilter,
        isSearched, 
        setIsSearched,
        jobs, setJobs
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
