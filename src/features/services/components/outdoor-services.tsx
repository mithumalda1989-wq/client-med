import React from "react";
import { UserRound } from "lucide-react";

const outdoorServicesData = [
    {
        department: "Department Of Pathology",
        doctors: [
            "Dr. Soma Ray - D.C.H., D.C.P. (CAL)",
            "Dr. Debasis Banerjee - M.D.",
            "Dr. Susruta Sen - M.D., D.N.B.",
            "Dr. Subhranshu Mandal - M.D.",
            "Dr. Souvik Dutta - M.D.",
            "Dr. Molay Roy - M.D.",
            "Dr. Rituparna Haldar - M.D.",
            "Dr. Lahari Banik - M.D.",
        ],
    },
    {
        department: "Department Of Radiology",
        doctors: [
            "Dr. Sanjukta Sarkar - M.D.",
            "Dr. Pulastya Sanyal - M.D.",
            "Dr. M. Chaudhuri - M.D.",
            "Dr. A. Indu Ghosh - M.D.",
            "Dr. A. Ganeriwala - D.N.B., M.D.",
            "Dr. Suman Saraogi - M.D.",
            "Dr. A. Banerjee - M.D.",
            "Dr. Saba Faiz - M.D.",
            "Dr. Suparna Sahu - M.D.",
            "Dr. Amrita Ganguly - M.D.",
            "Dr. Debraj Saha - M.D.",
            "Dr. Devpriya Pradhan - M.D.",
            "Dr. Sayantani Ghosh - M.D.",
            "Dr. Sankhadeep Saha - M.D.",
        ],
    },
    {
        department: "Department Of Cardiology",
        doctors: [
            "Dr. Malay Acharya - M.D., D.M.",
            "Dr. Santanu De - M.D., D.M.",
            "Dr. Subhra Aditya - M.D., D.M.",
            "Dr. Biswarup Sarkar - M.D., D.M.",
            "Dr. Lina Mukhopadhyay - M.D., D.M.",
            "Dr. Soumyojit Saha - M.D., D.M.",
            "Dr. Debabrata Sarkar - M.D., D.M.",
            "Dr. Kapildev Mondal - M.D., D.M.",
            "Dr. Dharmendra Kumar Singh - D.N.B., D.M.",
        ],
    },
];

const OutdoorServices: React.FC = () => {
    return (
        <section className="bg-[#f5f5f5] py-12 px-4 md:px-8">
            
            {/* Title */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 uppercase">
                    Diagnostic Doctor List - Kolkata
                </h1>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">

                {outdoorServicesData.map((dept) => (
                    <div key={dept.department}>
                        
                        {/* Department Name */}
                        <h2 className="text-2xl font-semibold text-slate-700 mb-4">
                            {dept.department}
                        </h2>

                        {/* Doctor List */}
                        <div className="rounded-xl overflow-hidden border border-slate-300 bg-white shadow-sm">

                            {dept.doctors.map((doctor, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 px-4 py-4 border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition"
                                >
                                    <UserRound
                                        size={18}
                                        className="text-slate-500 shrink-0"
                                    />

                                    <p className="text-slate-700 font-medium text-sm md:text-base">
                                        {doctor}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OutdoorServices;