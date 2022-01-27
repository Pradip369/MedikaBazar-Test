import { Snackbar } from '@mui/material';
import React, { Fragment, useState } from 'react';
import EditRow from './EditRow';


const TableData = ({ tData }) => {


    const [snackOpen, setSnackOpen] = useState(false);

    return (
        <Fragment>
            <div className='mx-5'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tData.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <EditRow data={item} setSnackOpen={setSnackOpen} type='product_name' />
                                    <EditRow data={item} setSnackOpen={setSnackOpen} type='price' />
                                    <EditRow data={item} setSnackOpen={setSnackOpen} type='quantity' />
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Snackbar
                open={snackOpen}
                autoHideDuration={2500}
                onClose={() => setSnackOpen(false)}
                message="Data saved successfully"
            >
            </Snackbar>
        </Fragment>
    )
};

export default TableData;
