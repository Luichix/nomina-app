'use client';
import React, { useState } from 'react';
import { Title, Button } from '@/components/atom';
import styles from './styles.module.css';
import { useForm } from 'react-hook-form';

enum Steps {
  PERSONAL = 'personal',
  JOB = 'job',
  CONTRACT = 'contract',
  PAYMENT = 'payment',
}

const array: Record<string, string>[] = [
  { area: 'administración' },
  { trabajo: 'administrador' },
  { regimen: 'general' },
  { jornada: 'administrativo' },
  { contrato: 'permanente' },
  { cuenta: 'ACH' },
];

const documents: Record<string, string>[] = [
  { cedula: 'Cedula' },
  { passport: 'Pasaporte' },
];

const areas: Record<string, string>[] = [{ area: 'Administración' }];
const job: Record<string, string>[] = [{ trabajo: 'Administrador' }];
const regime: Record<string, string>[] = [{ regime: 'General' }];
const workday: Record<string, string>[] = [{ jornada: 'Administrativo' }];
const contract: Record<string, string>[] = [{ regimen: 'Permanente' }];
const account: Record<string, string>[] = [{ regimen: 'ACH' }];

export function Person({ closeModal }: { closeModal: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const stepHandler = () => {
    switch (step) {
      case Steps.PERSONAL:
        setStep(Steps.JOB);
        break;
      case Steps.JOB:
        setStep(Steps.CONTRACT);
        break;
      case Steps.CONTRACT:
        setStep(Steps.PAYMENT);
        break;
      case Steps.PAYMENT:
        break;
    }
  };

  const [step, setStep] = useState('personal');

  return (
    <div className={styles.container}>
      <Title color="primary">Registrar Empleado</Title>
      <div className={styles.stage}>
        <div className={styles.item}>
          <span onClick={() => setStep('personal')}>1</span>
          <span> Información Personal</span>
        </div>
        <hr />
        <div
          className={styles.item}
          onClick={() => {
            setStep('job');
          }}
        >
          <span>2</span>
          <span>Informacón del Puesto</span>
        </div>
        <hr />
        <div
          className={styles.item}
          onClick={() => {
            setStep('contract');
          }}
        >
          <span>3</span>
          <span>Datos de Contratación</span>
        </div>
        <hr />
        <div
          className={styles.item}
          onClick={() => {
            setStep('payment');
          }}
        >
          <span>4</span>
          <span>Información de Pagos</span>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          {step === 'personal' && (
            <fieldset className={styles.fieldset}>
              <legend>Información Personal</legend>
              <label>
                Nombre:
                <input {...register('name', { required: true })} />
                {errors.name && <p>Ingrese el nombre.</p>}
              </label>
              <label>
                Apellido:
                <input {...register('surname', { required: true })} />
                {errors.surname && <p>Ingrese el apellido.</p>}
              </label>
              <label>
                Número de Identidad:
                <input {...register('identity', { required: true })} />
                {errors.identity && <p>Ingrese el número de identificación.</p>}
              </label>
              <label>
                Tipo de Documento:
                <select {...register('document', { required: true })}>
                  <option value="" defaultValue="" disabled={true}>
                    Seleccione...
                  </option>
                  {documents &&
                    documents.map((e) =>
                      Object.keys(e).map((item, index) => (
                        <option key={index} value={item}>
                          {e[item]}
                        </option>
                      ))
                    )}
                </select>
                {errors.document && <p>Seleccione el tipo de documento.</p>}
              </label>
            </fieldset>
          )}
          {step === 'job' && (
            <fieldset className={styles.fieldset}>
              <legend> Información del Puesto</legend>
              <label>
                Área de Trabajo:
                <select {...register('area', { required: true })}>
                  <option value="" defaultValue="" disabled={true}>
                    Seleccione...
                  </option>
                  {areas &&
                    areas.map((e) =>
                      Object.keys(e).map((item, index) => (
                        <option key={index} value={item}>
                          {e[item]}
                        </option>
                      ))
                    )}
                </select>
                {errors.document && <p>Seleccione el área de trabajo.</p>}
              </label>
              <label>
                Puesto de Trabajo:
                <select {...register('job', { required: true })}>
                  <option value="" defaultValue="" disabled={true}>
                    Seleccione...
                  </option>
                  {job &&
                    job.map((e) =>
                      Object.keys(e).map((item, index) => (
                        <option key={index} value={item}>
                          {e[item]}
                        </option>
                      ))
                    )}
                </select>
                {errors.document && <p>Seleccione el puesto de trabajo.</p>}
              </label>
              <label>
                Salario Mensual:
                <input
                  type="number"
                  {...register('salary', { required: true })}
                />
                {errors.identity && <p>Ingrese el salario mensual.</p>}
              </label>
              <label>
                Regimen de Horas:
                <select {...register('regime', { required: true })}>
                  <option value="" defaultValue="" disabled={true}>
                    Seleccione...
                  </option>
                  {regime &&
                    regime.map((e) =>
                      Object.keys(e).map((item, index) => (
                        <option key={index} value={item}>
                          {e[item]}
                        </option>
                      ))
                    )}
                </select>
                {errors.document && <p>Seleccione el regimen de horas.</p>}
              </label>
              <label>
                Jornada de Trabajo:
                <select {...register('workday', { required: true })}>
                  <option value="" defaultValue="" disabled={true}>
                    Seleccione...
                  </option>
                  {workday &&
                    workday.map((e) =>
                      Object.keys(e).map((item, index) => (
                        <option key={index} value={item}>
                          {e[item]}
                        </option>
                      ))
                    )}
                </select>
                {errors.document && <p>Seleccione la jornada de trabajo.</p>}
              </label>
            </fieldset>
          )}
          {step === 'contract' && (
            <fieldset className={styles.fieldset}>
              <legend> Datos de contratación</legend>
              <label>
                Tipo de Contrato:
                <select {...register('contract', { required: true })}>
                  <option value="" defaultValue="" disabled={true}>
                    Seleccione...
                  </option>
                  {contract &&
                    contract.map((e) =>
                      Object.keys(e).map((item, index) => (
                        <option key={index} value={item}>
                          {e[item]}
                        </option>
                      ))
                    )}
                </select>
                {errors.document && <p>Seleccione el tipo de contrato.</p>}
              </label>
              <label>
                Inicio del Contrato:
                <input
                  type="date"
                  {...register('startContract', { required: true })}
                />
                {errors.document && (
                  <p>Indique la fecha de inicio de contrato.</p>
                )}
              </label>
              <label>
                Fin del Contrato:
                <input
                  type="date"
                  {...register('endContract', { required: true })}
                />
                {errors.document && <p>Indique la fecha de fin de contrato.</p>}
              </label>
              <span>
                Controlar Horario:
                <input
                  id="timeControl"
                  type="checkbox"
                  {...register('timeControl')}
                />
                <label htmlFor="timeControl" />
              </span>
            </fieldset>
          )}
          {step === 'payment' && (
            <fieldset className={styles.fieldset}>
              <legend> Información de Pagos</legend>
              <label>
                Cuenta de Pagos:
                <select {...register('payAccount', { required: true })}>
                  <option value="" defaultValue="" disabled={true}>
                    Seleccione...
                  </option>
                  {account &&
                    account.map((e) =>
                      Object.keys(e).map((item, index) => (
                        <option key={index} value={item}>
                          {e[item]}
                        </option>
                      ))
                    )}
                </select>
                {errors.document && <p>Seleccione la cuenta de pagos.</p>}
              </label>
              <label>
                Cuenta de Banco:
                <input {...register('bankAccount')} />
                {errors.document && <p>Coloca la cuenta de banco.</p>}
              </label>
            </fieldset>
          )}
          <div className={styles.actions}>
            {step != Steps.PERSONAL && (
              <Button info="secondary" onClick={stepHandler}>
                Anterior
              </Button>
            )}
            {step != Steps.PAYMENT && (
              <Button info="primary" onClick={stepHandler}>
                Siguiente
              </Button>
            )}
            {step == Steps.PAYMENT && (
              <Button info="primary" type="submit">
                Registrar
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Person;
