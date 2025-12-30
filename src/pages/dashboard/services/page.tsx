import { Search, List, LayoutGrid, ArrowUpRight } from "lucide-react";

const servicesData = [
  {
    title: "Massage Therapy",
    subtitle: "Therapeutic Touch Transformed",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUU50jf9QMy0akAdb78Zrzu8aD0I0dQQ5Zg&s",
  },
  {
    title: "Yoga & Guided Meditation",
    subtitle: "Movement with Purpose",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
  },
  {
    title: "Physiotherapy",
    subtitle: "Restore Strength & Mobility",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
  },
  {
    title: "Hypnotherapy",
    subtitle: "Mindful Healing Sessions",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8",
  },
  {
    title: "Nutrition Consultation",
    subtitle: "Fuel Your Body Right",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
  },
];

const Services = () => {
  return (
    <>
      <section className="p-6 bg-[#f7f5ef] rounded-3xl">
        <hr className="border-gray-300 mb-6" />

        <h2 className="text-3xl font-semibold text-[#5f7a3d] libre-font">
          Services
        </h2>
        <p className="text-gray-700 mt-1">
          Explore and Book Wellness Appointments
        </p>

        {/* Search & Filters */}
        <div className="flex flex-wrap items-center gap-3 mt-6">
          <div className="flex items-center bg-white px-4 py-2 rounded-full w-[260px] shadow-sm">
            <Search className="text-gray-400 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search Service"
              className="outline-none text-sm w-full"
            />
          </div>

          {[
            "All Services",
            "Massage",
            "Physiotherapy",
            "Hypnotherapy",
            "Acupuncture",
            "Nutrition",
          ].map((item) => (
            <button
              key={item}
              className={`px-5 py-2 rounded-full text-sm border ${
                item === "All Services"
                  ? "bg-[#5f7a3d] text-white border-[#5f7a3d]"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              {item}
            </button>
          ))}

          <div className="ml-auto flex gap-2">
            <button className="w-10 h-10 rounded-full bg-[#c98b2b] text-white flex items-center justify-center">
              <List size={20} />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <LayoutGrid size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold libre-font text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500">{service.subtitle}</p>
                </div>

                <button className="flex items-center gap-1 text-sm text-gray-600">
                  See All
                  <span className="w-7 h-7 rounded-full border flex items-center justify-center">
                    <ArrowUpRight size={16} />
                  </span>
                </button>
              </div>

              <img
                src={service.image}
                alt={service.title}
                className="rounded-3xl w-full h-[160px] object-cover"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="p-6 bg-[#f7f5ef] ">
        <div className="w-full bg-gray-200 h-[2px] my-5"></div>
        <h2 className="mainh2 c-vibrant libre-font">Massage Therapy</h2>
        <div className="flex flex-row gap-5 bg-[#fbfaf9] rounded-3xl p-5 shadow-sm">
          <div className=" w-[50%]">
            <img className="" src="/mm.png" alt="#" />
          </div>
          <div className="py-3 flex flex-col gap-2">
            <span className="text-xl font-semibold text-[#2b2b2b] libre-font">
              Theraputic massage
            </span>
            <p className="poppins-font text-sm ">
              A custom-blended session tailored to your needs using multiple
              techniques such as deep tissue, myofascial release, or trigger
              point work. Ideal for those requiring experiencing chronic
              tension, postural imbalance, injury or stress-related pain.
              Results deepen with each visit as your body unwinds more
              comoletelv.
            </p>
            <div>
            <button className="service-btn ">BOOK THIS EXPERIENCE</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
