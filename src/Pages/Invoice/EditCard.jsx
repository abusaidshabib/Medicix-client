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
    </div>
  );
};

export default EditCard;