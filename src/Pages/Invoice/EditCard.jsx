import React from 'react';
import EditInvoice from '../../Components/Invoice/EditInvoice';
import UserForm from '../../Components/Invoice/UserForm';
import useTitle from '../../Hooks/UseTitle/UseTitle';

const EditCard = () => {

  useTitle("Edit-Invoice");

  return (
    <div>
      <UserForm></UserForm>
      <EditInvoice></EditInvoice>
      <p className='text-warning text-center text-3xl py-5'>[Please fill the form after Changing product quantity or delete]</p>
    </div>
  );
};

export default EditCard;