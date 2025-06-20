import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import Error from './Error';
import type { DraftPatient } from '../types';
import { usePatientStore } from '../store';

export default function PatientForm() {

    const { addPatient, activeId, patients, updatePatient } = usePatientStore()
    const { register, handleSubmit, setValue, formState: {errors}, reset } = useForm<DraftPatient>();

    useEffect(() => {
        if(activeId) {
            const activePatient = patients.filter(patient => patient.id === activeId)[0];
            setValue('name', activePatient.name);
            setValue('caretaker', activePatient.caretaker);
            setValue('email', activePatient.email);
            setValue('date', activePatient.date);
            setValue('symptoms', activePatient.symptoms);
        } else {
            setValue('name', '');
            setValue('caretaker', '');
            setValue('email', '');
            setValue('date', new Date());
            setValue('symptoms', '');
        }
    }, [activeId])
  
    const registerPatient = (data : DraftPatient) => {
        if(activeId) {
            updatePatient(data);
            toast.success('Patient successfully updated')
        } else {
            addPatient(data);
            toast.success('Patient successfully saved')
        }

        reset();
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 bg-slate-100 pe-10 ps-10 pt-4 pb-1 rounded-lg">
            <h2 className="font-black text-3xl text-center">Patient Follow-up</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Add patients and {''}
                <span className="text-indigo-600 font-bold">manage them</span>
            </p>

            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Patient 
                    </label>
                    <input  
                        id="name"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Patient Name"
                        {...register('name', {
                            required: 'Patient name is required',
                            maxLength: {
                                value: 100,
                                message: 'Max 100 characters'
                            }
                        })}
                    />
                    {errors.name && (
                        <Error>
                            {errors.name?.message}
                        </Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Caretaker 
                    </label>
                    <input  
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Caretaker name" 
                        {...register('caretaker', {
                            required: 'Caretaker name is required',
                            maxLength: {
                                value: 100,
                                message: 'Max 100 characters'
                            }
                        })}
                    />
                    {errors.caretaker && (
                        <Error>
                            {errors.caretaker?.message}
                        </Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email 
                    </label>
                    <input  
                        id="email"
                        className="w-full p-3  border border-gray-100"  
                        type="email" 
                        placeholder="email@example.com"
                        {...register("email", {
                            required: "E-mail is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid e-mail'
                            }
                        })} 
                    />
                    {errors.email && (
                        <Error>
                            {errors.email?.message}
                        </Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha Alta 
                    </label>
                    <input  
                        id="date"
                        className="w-full p-3  border border-gray-100"  
                        type="date" 
                        {...register('date', {
                            required: 'Date is required',
                        })}
                    />
                    {errors.date && (
                        <Error>
                            {errors.date?.message}
                        </Error>
                    )}
                </div>
                
                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                    Síntomas 
                    </label>
                    <textarea  
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"  
                        placeholder="Patient symptoms" 
                        {...register('symptoms', {
                            required: 'Symptoms are required',
                        })}
                    ></textarea>
                    {errors.symptoms && (
                        <Error>
                            {errors.symptoms?.message}
                        </Error>
                    )}
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value='Save Patient'
                />
            </form> 
        </div>
    )
}