import { Button } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { MAIN_API_URL } from './ApiUrl';
import { Snackbar } from '@mui/material';
import { errorMessage } from './Utils';

const AddItem = ({ tableInfo }) => {

    const [open, setOpen] = useState(false);
    const { tableItem, setTableItem } = { ...tableInfo };
    const [snackOpen, setSnackOpen] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if ((formData.get('price') >= 0) & (formData.get('quantity') >= 0)) {
            axios.post(MAIN_API_URL + 'product/', formData)
                .then((res) => {
                    // console.log(res);
                    let data = [res.data]
                    setOpen(false);
                    setTableItem(data.concat(tableItem))
                    setSnackOpen(true)
                })
                .catch((error) => {
                    let err = errorMessage(error.response ? error.response.data : { a: {} })
                    alert(err)
                })
        }
        else {
            alert('Error : Price or Quantity must be greater than 0')
        }
    }

    return (
        <div className='d-flex justify-content-end m-3'>
            <Button color='warning' size='small' variant='contained' onClick={() => setOpen(true)}>
                Add Product
            </Button>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Add Product</DialogTitle>
                <form onSubmit={formSubmit}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Product name"
                            name="product_name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Price"
                            name="price"
                            type="number"
                            fullWidth
                            variant="outlined"
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Quantity"
                            name="quantity"
                            type="number"
                            fullWidth
                            variant="outlined"
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type='submit'>Submit</Button>
                    </DialogActions>
                </form>
            </Dialog>
            <Snackbar
                open={snackOpen}
                autoHideDuration={2500}
                onClose={() => setSnackOpen(false)}
                message="Product created successfully"
            >
            </Snackbar>

        </div>
    )
};

export default AddItem;
