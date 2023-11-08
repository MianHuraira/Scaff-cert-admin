import React from 'react';
import '@styles/react/apps/app-users.scss'
import ClientDataTable from './table';
// import './client.css';
import '@styles/react/libs/tables/react-dataTable-component.scss'

import { Link } from 'react-router-dom';
import { UncontrolledButtonDropdown , UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreHorizontal, Trash, Edit2 } from 'react-feather'
const Payements = () => {
  let data = [
    { srno: "09", username: "Atif", productname: "Bussiness", transectionid: "wer456rt89uhi67", payment: "500.00", currency: "USD", email: "tes@gmail.ocm", status: "Active" },
    { srno: "09", username: "Atif", productname: "Bussiness", transectionid: "wer456rt89uhi67", payment: "500.00", currency: "USD", email: "tes@gmail.ocm", status: "Active" },
  ]


  const columns = [
    {
      name: 'Sr.no',
      selector: (row) => row.srno,
      sortable: "true",
      // maxWidth:"6rem"
    },
    {
      name: 'User Nmae',
      selector: (row) => row.username,
      sortable: "true",
      // maxWidth:"6rem"
    },
    {
      name: 'Product Name',
      selector: (row) => row.productname,
      sortable: "true",
      // maxWidth:"6rem"
    },

    {
      name: 'Transection ID',
      selector: (row) => row.transectionid,
      sortable: "true",
      // maxWidth:"6rem"

    },

    {
      name: 'Payment Gross',
      selector: (row) => row.payment,
      sortable: "true",
      // maxWidth:"6rem"
    },
    {
      name: 'Currency Code',
      cell: (row) => row.currency,
      sortable: "true",
      // maxWidth:"6rem"
    },
    {
      name: 'Email Adress',
      cell: (row) => row.email,
      sortable: "true",
      // maxWidth:"6rem"
    },
    {
      name: 'Status',
      cell: (row) => row.status,
      sortable: "true",
      // maxWidth:"6rem"
    },
    {
      name: 'Action',
      allowOverflow: true,
      maxWidth: "7rem",
      minWidth: "2rem",
      cell: () => {
        return (
          <div className='d-flex justify-content-end w-100'>
            <UncontrolledDropdown className="" >
              <DropdownToggle className='pe-1 ' tag='span'>
                <MoreHorizontal size={15} />
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <Link to="./client-edit" className='btn btn-white p-0 m-0 w-100' >
                    <Edit2 size={15} />
                    <span className='align-middle ms-50 pe-2 '>Edit</span></Link>
                </DropdownItem>
                <DropdownItem>
                  <Trash size={15} />
                  <span className='align-middle ms-50'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        )
      }
    }
  ]
  return (

    <>
      <div className="d-flex align-align-items-center justify-content-between mt-3 mb-3">
        <h5 className="head_title">Payements</h5>
        <div className='d-flex align-items-center'>

          <div className="ms-2">
            <UncontrolledButtonDropdown>
              <DropdownToggle className="filter_btn">
                <img className='filter_img' src="./icons/filter_icon.png" />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  All
                </DropdownItem>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  Completed
                </DropdownItem>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  Pending
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledButtonDropdown>

          </div>
        </div>
      </div>
      <ClientDataTable columns={columns} data={data} />
    </>

  );
}

export default Payements;
