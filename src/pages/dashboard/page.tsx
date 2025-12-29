import {
  MessageCircleMore,
  ArrowRight,
  Trash,
  Download,
  FileText,
  Plus,
  LayoutGrid,
  CalendarDays,
  Heart,
  NotepadText,
  FileInput,
  UserRoundPlus,
  TextSearch,
} from "lucide-react";

const Dashboard = () => {
  const practitioners = [
    {
      id: 1,
      name: "Dr. Michael Chen",
      specialty: "Massage Therapist",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 2,
      name: "Dr. Sarah Williams",
      specialty: "Physiotherapist",
      image: "https://i.pravatar.cc/150?img=45",
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      specialty: "Massage Therapist",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 4,
      name: "Dr. Sarah Williams",
      specialty: "Physiotherapist",
      image: "https://i.pravatar.cc/150?img=45",
    },
  ];

  const documents = [
    {
      id: 1,
      title: "LMN - Nov 2025",
      category: "Letter of Medical Necessity",
      isLink: false,
    },
    {
      id: 2,
      title: "Wellness Assessment Results",
      category: "Assessment",
      isLink: true,
    },
    {
      id: 3,
      title: "Service Agreement",
      category: "Legal",
      isLink: false,
    },
    {
      id: 4,
      title: "LMN - Nov 2025",
      category: "Letter of Medical Necessity",
      isLink: false,
    },
    {
      id: 5,
      title: "Wellness Assessment Results",
      category: "Assessment",
      isLink: false,
    },
  ];

  return (
    <div className="flex bg-[#fcfaf9] border-red-500 border-3 p-2">
      <div className="w-[210px] space-y-1 border border-gray-500 p-3">
        <div className="bg-[#2b2b2b] rounded-lg flex items-center gap-2.5 p-3">
          <LayoutGrid size={20} className="text-white" />
          <h2 className="text-white text-base font-medium">
            Dashboard</h2>
        </div>
        <div className="bg-transparent rounded-lg flex items-center gap-2.5 p-3">
          <CalendarDays size={20} className="text-[#2b2b2b]" />
          <h2 className="text-[#2b2b2b] text-base font-medium">
            Appointments</h2>
        </div>
        <div className="bg-transparent rounded-lg flex items-center gap-2.5 p-3">
          <Heart size={20} className="text-[#2b2b2b]" />
          <h2 className="text-[#2b2b2b] text-base font-medium">
            Wellness</h2>
        </div>
        <div className="bg-transparent rounded-lg flex items-center gap-2.5 p-3">
          <TextSearch size={20} className="text-[#2b2b2b]" />
          <h2 className="text-[#2b2b2b] text-base font-medium">
            Services</h2>
        </div>
        <div className="bg-transparent rounded-lg flex items-center gap-2.5 p-3">
          <UserRoundPlus size={20} className="text-[#2b2b2b]" />
          <h2 className="text-[#2b2b2b] text-base font-medium">
            Membership</h2>
        </div>
        <div className="bg-transparent rounded-lg flex items-center gap-2.5 p-3">
          <NotepadText size={20} className="text-[#2b2b2b]" />
          <h2 className="text-[#2b2b2b] text-base font-medium">
            Session Summary</h2>
        </div>
        <div className="bg-transparent rounded-lg flex items-center gap-2.5 p-3">
          <FileInput size={20} className="text-[#2b2b2b]" />
          <h2 className="text-[#2b2b2b] text-base font-medium">
            Resources</h2>
        </div>


      </div>
      <div className="flex-1">
        <div className="p-3">
          <h2 className="libre-font text-xl font-bold text-[#5f7a3d]">
            Hello, Ellis
          </h2>
          <span className="font-poppins text-sm text-gray-800">
            Lets take care of you today
          </span>
        </div>

        <div className="grid gap-4 p-4 grid-cols-12">
          <div className="flex gap-4 col-span-9">
            <div className="bg-white w-2/5 p-5 rounded-3xl">
              <h2 className="text-base libre-font font-bold text-[#5f7a3d] mb-4">
                Your Practitioners
              </h2>
              <div className="space-y-2.5">
                {practitioners.map((practitioner) => (
                  <div
                    key={practitioner.id}
                    className="group flex items-center gap-2.5 p-2.5 rounded-2xl cursor-pointer transition-all bg-gray-50 border border-transparent hover:bg-transparent hover:border-[#c5893a]"
                  >
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={practitioner.image}
                      alt={practitioner.name}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-800 truncate">
                        {practitioner.name}
                      </h3>
                      <p className="text-xs text-gray-500 truncate">
                        {practitioner.specialty}
                      </p>
                    </div>
                    <button
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-all bg-gray-200 text-gray-600 group-hover:bg-[#c5893a] group-hover:text-white"
                    >
                      <MessageCircleMore size={16} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <button className="flex items-center gap-1.5 px-5 py-2.5 bg-white rounded-full border border-gray-300 font-semibold text-gray-800 text-sm whitespace-nowrap">
                  SEE ALL PRACTITIONERS
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Documents Section */}
            <div className="col-span-3 flex-1 bg-[#f7f1e7e5] p-5 rounded-3xl">
              <h2 className="text-base libre-font font-bold text-[#5f7a3d] mb-4">
                Your Documents
              </h2>
              <div className="space-y-2.5">
                {documents.map((document) => (
                  <div
                    key={document.id}
                    className="parent flex items-center gap-2.5 p-2.5 rounded-2xl pl-0"
                  >
                    <div className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center">
                      <FileText size={16} className="text-[#5f7a3d]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-sm font-semibold truncate ${
                          document.isLink ? "text-[#2563eb]" : "text-gray-800"
                        }`}
                      >
                        {document.title}
                      </h3>
                      <p className="text-xs text-gray-500 truncate">
                        {document.category}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button className="text-gray-600 p-1">
                        <Trash size={16} />
                      </button>
                      <button className="text-gray-600 p-1">
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button className="flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-gray-300 font-semibold text-gray-800 text-sm whitespace-nowrap">
                  UPLOAD NEW
                  <Plus size={14} />
                </button>
                <button className="flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-gray-300 font-semibold text-gray-800 text-sm whitespace-nowrap">
                  SEE ALL DOCUMENTS
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-3 space-y-2">
            <div className="bg-white rounded-3xl p-5">
              <h2 className="text-base libre-font font-bold text-[#5f7a3d] mb-4">
                Wellness Score
              </h2>
              <h2>Wellness Half Circle Chart Will be Here</h2>
              <p>75%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
