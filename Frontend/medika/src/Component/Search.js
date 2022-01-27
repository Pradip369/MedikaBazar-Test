import React, { Fragment, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Button } from '@mui/material';
import { MAIN_API_URL } from './ApiUrl';
import axios from 'axios';

const Search = ({ setTableItem }) => {

    const [searchItem, setSearchItem] = useState([]);

    const getItem = async (sval) => {
        const res = await axios.get(MAIN_API_URL + 'product_search/', {
            params: {
                search: sval,
            },
        });
        setSearchItem(res.data);
        // console.log(res.data);
        return res
    }

    const searchClick = (e) => {
        let sval = e.target.value
        sval && getItem(sval);
    }

    const searchSubmit = async (e) => {
        e.preventDefault();
        let sval = e.target[0].value
        if (sval) {
            let response = await getItem(sval);
            setTableItem(response.data);
        }
    }

    return (
        <Fragment>
            <div>
                <form className='d-flex justify-content-center my-4' onSubmit={searchSubmit}>
                    <Autocomplete
                        noOptionsText='No result found...'
                        size='small'
                        disablePortal
                        options={searchItem.map((item) => item.product_name)}
                        sx={{ width: 600 }}
                        renderInput={(params) => <TextField onChange={searchClick} {...params} label="Search product name" />}
                    />
                    <Button type='submit' color='info' variant='contained' size='small'>
                        <SearchRoundedIcon />
                    </Button>
                </form>
            </div>
        </Fragment>
    )
};

export default Search;
