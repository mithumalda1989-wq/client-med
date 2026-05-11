import React from "react";
import {
    Microscope,
    ScanLine,
    HeartPulse,
    Activity,
    Stethoscope,
    Brain,
} from "lucide-react";

const indoorServicesData = [
    {
        id: 1,
        title: "Pathology",
        icon: Microscope,
        image:
            "https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=1200&auto=format&fit=crop",
        tagline: "Advanced Laboratory Diagnostics",
        description:
            "Comprehensive pathology services including blood tests, hormone analysis, microbiology and advanced laboratory investigations with NABL accredited standards.",
        highlights: [
            "Blood Test",
            "Biochemistry",
            "Histopathology",
            "Microbiology",
        ],
        features: [
            "Routine Blood Test",
            "Thyroid Profile",
            "Diabetes Screening",
            "Urine Examination",
            "Liver Function Test",
            "Kidney Function Test",
        ],
    },

    {
        id: 2,
        title: "Radiology & Imaging",
        icon: ScanLine,
        image:
            "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
        tagline: "Modern Imaging & Diagnostics",
        description:
            "Advanced radiology department equipped with modern imaging technologies for accurate diagnosis and patient care.",
        highlights: [
            "MRI",
            "CT Scan",
            "Digital X-Ray",
            "Ultrasonography",
        ],
        features: [
            "MRI Scan",
            "CT Scan",
            "Color Doppler",
            "Digital X-Ray",
            "Ultrasonography",
            "Mammography",
        ],
    },

    {
        id: 3,
        title: "Cardiology",
        icon: HeartPulse,
        image:
            "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
        tagline: "Complete Heart Care",
        description:
            "Expert cardiac diagnostics and consultation services with advanced cardiac monitoring systems.",
        highlights: [
            "ECG",
            "Echo",
            "Stress Test",
            "Heart Checkup",
        ],
        features: [
            "ECG",
            "2D Echo",
            "TMT",
            "Holter Monitoring",
            "Cardiac Consultation",
            "Heart Risk Assessment",
        ],
    },

    {
        id: 4,
        title: "Neurology",
        icon: Brain,
        image:
            "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1200&auto=format&fit=crop",
        tagline: "Brain & Nerve Care",
        description:
            "Comprehensive neurological consultation and diagnostic services for brain, spine and nervous system disorders.",
        highlights: [
            "EEG",
            "Nerve Study",
            "Brain Care",
        ],
        features: [
            "Neurology Consultation",
            "EEG",
            "EMG",
            "Nerve Conduction Study",
            "Migraine Treatment",
            "Stroke Evaluation",
        ],
    },

    {
        id: 5,
        title: "General Medicine",
        icon: Stethoscope,
        image:
            "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        tagline: "Expert Physician Consultation",
        description:
            "Multi-disciplinary outpatient consultation services with experienced physicians and specialists.",
        highlights: [
            "OPD",
            "Consultation",
            "Preventive Care",
        ],
        features: [
            "Doctor Consultation",
            "Health Checkup",
            "Preventive Medicine",
            "Diabetes Care",
            "Hypertension Care",
            "General OPD",
        ],
    },

    {
        id: 6,
        title: "Health Checkup",
        icon: Activity,
        image:
            "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
        tagline: "Preventive Health Packages",
        description:
            "Affordable full body health checkup packages designed for early detection and preventive healthcare.",
        highlights: [
            "Full Body Checkup",
            "Preventive Care",
            "Wellness",
        ],
        features: [
            "Executive Health Package",
            "Diabetes Package",
            "Cardiac Package",
            "Senior Citizen Package",
            "Women Health Package",
            "Preventive Screening",
        ],
    },
];

const IndoorServices: React.FC = () => {
    return (
        <section className="bg-slate-50 py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="text-blue-600 font-semibold uppercase tracking-[3px]">
                        Sonoscan Healthcare
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3">
                        Indoor Services
                    </h1>

                    <p className="text-slate-600 mt-5 max-w-3xl mx-auto leading-relaxed">
                        SONOSCAN provides advanced diagnostic, imaging and
                        multi-speciality healthcare services with experienced
                        doctors and modern technologies under one roof.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {indoorServicesData.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.id}
                                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-slate-100"
                            >
                                {/* Image */}
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                    />

                                    <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow">
                                        <Icon
                                            size={28}
                                            className="text-blue-700"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
                                        {service.tagline}
                                    </p>

                                    <h2 className="text-2xl font-bold text-slate-800 mt-2">
                                        {service.title}
                                    </h2>

                                    <p className="text-slate-600 mt-4 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {service.highlights.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    <div className="mt-6 space-y-3">
                                        {service.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-3 text-slate-700"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-blue-600" />

                                                <p className="text-sm">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Button */}
                                    <button className="hidden mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndoorServices;