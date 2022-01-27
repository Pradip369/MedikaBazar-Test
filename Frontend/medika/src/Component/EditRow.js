import { TextField } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { MAIN_API_URL } from './ApiUrl';
import './common.css';
import { errorMessage } from './Utils';



const EditRow = ({ data, setSnackOpen, type }) => {

    const [editRow, setEditRow] = useState(false);
    const [value, setValue] = useState(data);

    const changeField = (e) => {
        setEditRow(false);
        if (value !== data) {
            axios.put(MAIN_API_URL + `product/${value.id}/`, value)
                .then((res) => {
                    console.log(res.data);
                    setSnackOpen(true)
                })
                .catch((error) => {
                    let err = errorMessage(error.response ? error.response.data : { a: {} })
                    alert('Error : ' + err)
                })
        }
    }

    const returnData = () => {
        if (type === 'product_name') {
            return value.product_name
        }
        else if (type === 'price') {
            return value.price
        }
        else {
            return value.quantity
        }
    }

    return (
        <Fragment>
            {
                editRow ?
                    <td>
                        <TextField
                            variant="standard"
                            onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
                            value={returnData()}
                            autoFocus
                            size='small'
                            onBlur={changeField}
                            name={type}
                            style={{ width: '100px' }}
                        />
                    </td>
                    :
                    <td onClick={() => setEditRow(true)} className='editrow__hover'>
                        {
                            returnData()
                        }
                    </td>
            }

        </Fragment>
    )
};

export default EditRow;
