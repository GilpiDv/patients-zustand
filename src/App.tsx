import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"
import { ToastContainer } from "react-toastify"

function App() {

    return (
        <>
            <div className="w-full mx-auto p-10 bg-indigo-200">
                <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
                    Patients Tracking {''}
                    <span className="text-indigo-700">Vet</span>
                </h1>
            </div>

            <div className="mt-12 md:flex">
                <PatientForm />
                <PatientList />
            </div>

            <ToastContainer />
        </>
    )
}

export default App
