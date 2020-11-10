import React from 'react';
import { db } from '../firebase';
import ContainerLayout from './ContainerLayout';
import FormOffice from './FormOffice';

export default function NewOffice() {
  const addOrEditOffice = async (officeObject) => {
    await db
      .collection('offices')
      .doc()
      .set(officeObject);
    console.log('New office added');
  };

  return (
    <>
      <ContainerLayout>
        <FormOffice addOrEditOffice={addOrEditOffice} />
      </ContainerLayout>
    </>
  );
}
