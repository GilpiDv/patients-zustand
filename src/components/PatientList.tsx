import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails";


export default function PatientList() {
    
    const { patients } = usePatientStore();
    
    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center"></h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Manage your {''}
                        <span className="text-indigo-600 font-bold">patients and dates</span>
                    </p>
                    {patients.map(patient => (
                        <PatientDetails 
                            key={patient.id}
                            patient={patient}
                        />
                    ))}
                </>
            ) : (
                <div className="lg:pt-0 md:pt-0 pt-10">
                    <h2 className="font-black text-3xl text-center p-0">No patients</h2>
                    <p className="text-xl mt-5 mb-10 text-center m-2">
                        Start adding patients {''}
                        <span className="text-indigo-600 font-bold">and they will appear here</span>
                    </p>
                </div>
            )}
        </div>
    )
}
