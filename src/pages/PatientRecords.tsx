import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Activity, ArrowRight, Search, Calendar, FileText, HeartPulse } from "lucide-react";
import AddPatientDialog from "@/components/AddPatientDialog";
import DeletePatientDialog from "@/components/DeletePatientDialog";

interface Patient {
    patient_id: number;
    patient_name: string;
    age: number;
    gender: string;
    diagnosis: string;
    admission_date: string;
    bed_id: number | null;
}

const PatientRecords = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const fetchPatients = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/patients');
            const data = await res.json();
            setPatients(data);
            setFilteredPatients(data);
        } catch (error) {
            console.error("Error fetching patients:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPatients();
    }, []);

    useEffect(() => {
        const filtered = patients.filter(patient =>
            patient.patient_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            patient.patient_id.toString().includes(searchQuery) ||
            patient.diagnosis.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPatients(filtered);
    }, [searchQuery, patients]);

    return (
        <div className="min-h-screen bg-slate-50/50">
            {/* Header Section */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900">Patient Records</h1>
                                <p className="text-sm text-slate-500">Manage and monitor patient status</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link to="/">
                                <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
                                    Back to Home
                                </Button>
                            </Link>
                            <AddPatientDialog onPatientAdded={fetchPatients} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Search and Filter Bar */}
                <div className="mb-8 flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                            placeholder="Search by name, ID, or diagnosis..."
                            className="pl-10 bg-white border-slate-200 focus:border-blue-500 transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 ml-auto">
                        <span className="font-medium text-slate-900">{filteredPatients.length}</span> patients found
                    </div>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="h-64 bg-slate-200 rounded-xl animate-pulse"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
                        {filteredPatients.map((patient) => (
                            <Card key={patient.patient_id} className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-200 bg-white overflow-hidden">
                                <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-teal-400"></div>
                                <CardHeader className="pb-3 pt-5">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                {patient.patient_name.charAt(0)}
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                                    {patient.patient_name}
                                                </CardTitle>
                                                <div className="text-xs font-medium text-slate-500 flex items-center gap-1 mt-0.5">
                                                    <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">ID: #{patient.patient_id}</span>
                                                    {patient.bed_id && (
                                                        <>
                                                            <span>•</span>
                                                            <span className="bg-blue-50 px-1.5 py-0.5 rounded text-blue-600 font-medium border border-blue-100">Bed #{patient.bed_id}</span>
                                                        </>
                                                    )}
                                                    <span>•</span>
                                                    <span>{patient.gender}</span>
                                                    <span>•</span>
                                                    <span>{patient.age} yrs</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse absolute top-1 right-1"></div>
                                            <Activity className="text-slate-300 w-5 h-5" />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                                            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Diagnosis</div>
                                            <div className="font-medium text-slate-800">{patient.diagnosis}</div>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <Calendar className="w-4 h-4" />
                                            <span>Admitted: {new Date(patient.admission_date).toLocaleDateString()}</span>
                                        </div>

                                        <div className="pt-2 flex gap-2">
                                            <Link to={`/dashboard?patientId=${patient.patient_id}`} className="flex-1">
                                                <Button className="w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold transition-all group-hover:shadow-md">
                                                    Monitor
                                                    <HeartPulse className="w-4 h-4 ml-2" />
                                                </Button>
                                            </Link>
                                            <DeletePatientDialog
                                                patientId={patient.patient_id}
                                                patientName={patient.patient_name}
                                                onPatientDeleted={fetchPatients}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                {!loading && filteredPatients.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-medium text-slate-900">No patients found</h3>
                        <p className="text-slate-500 max-w-sm mx-auto mt-2">
                            Try adjusting your search terms or add a new patient to the system.
                        </p>
                        <div className="mt-6">
                            <AddPatientDialog onPatientAdded={fetchPatients} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PatientRecords;
