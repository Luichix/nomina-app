import React from 'react';
import styles from './styles.module.css';
import { Table } from '@/components/molecules';
import data from '@/../public/data/personal-dummies.json';

const fecha = new Date();

const word = {
  ID_PERSONAL: 'Id Personal',
  Name: 'Nombre',
  Surname: 'Apellido',
  IdentityCard: 'N° de Identidad',
  TypeCard: 'Documento',
  PhoneNumber: 'Telefono',
  WorkArea: 'Area',
  Job: 'Puesto',
  Salary: 'Salario',
  FK_REGIMENT: 'Regimen',
  FK_WORKINGDAY: 'jornada',
  TimeControl: 'Control Horario',
  FK_CONTRACT: 'Contrato',
  StartContract: 'Inicio',
  EndContract: 'Finalizacion',
  FK_PAYACCOUNT: 'Cuenta de Pago',
  BankAccount: 'Cuenta Bancaria',
  Status: 'Estado',
  AddedDate: 'Registro',
  AlterDate: 'Modificacion',
  LowDate: 'Baja',
  FK_USER_ADD: 'Registrador',
  FK_USER_ALTER: 'Modificador',
  FK_USER_LOW: 'Finalizador',
};

const getHead = (data: Record<string, string>) => {
  const head = [];

  for (const key in data) {
    head.push(data[key]);
  }
  return head;
};
const headers = getHead(word);

function Personal() {
  return (
    <div className={styles.personal}>
      <Table headers={headers} register={data} />
    </div>
  );
}

export default Personal;
