const Congress2023 = () => {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide leading-tight animate-fade-in">
              2nd International Congress on Recent Trends in Computer Science - ICRCS 2023
            </h1>
            <p className="text-3xl md:text-4xl font-semibold text-white/90 tracking-wider mb-4 animate-fade-in-delayed">
              ICRCS 2023
            </p>
            <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>

      {/* Congress Banner */}
      <div className="mb-16 container mx-auto px-4 pt-12">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img
            src="/2023.jpeg"
            alt="ICRCS 2023 Congress Banner"
            width={1200}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      <OrganizingCommittee />
    </div>
  );
};

export default Congress2023;

const organizingCommittee = [
  { name: "Md. Tabil Ahammed", role: "General Chair" },
  { name: "MD. MOYNUL ISLAM", role: "Organizing Chair" },
  { name: "AISHWARYA ROY", role: "Organizing Chair" },
  { name: "ABDULLA MAHAMUD SHEJAN", role: "Organizing Chair" },
  { name: "MD. SUMS DIP SARKER", role: "Organizing Chair" },
  { name: "ISHRAAT ZAHAAN", role: "Organizing Secretary" },
  { name: "MST. SHARMIN AKTER", role: "Organizing Secretary" },
  { name: "MD SHARIAR RAHMAN OION", role: "Registration Chair" },
  { name: "NURE ALAM SAKIB", role: "Ambassador Lead" },
  { name: "SHRABANI DAS", role: "Ambassador Lead" },
  { name: "MOHAMMAD ASHFAQ UR RAHMAN", role: "Design Lead" },
  { name: "KHONDOKER NOWRIN TABASSUM", role: "Ambassador Co-Lead" },
  { name: "SUDIPTO GHOSH", role: "Management Chair" },
  { name: "MD SHAHADAT HOSSEN SHUVO", role: "Management Chair" },
  { name: "MD MEHEDI HASAN", role: "Organizing Member" },
  { name: "BEHAIREYO RHODAH", role: "Organizing Member" },
  { name: "NIRANJAN KUMAR S", role: "Organizing Member" },
  { name: "NOOR FATIMA", role: "Organizing Member" },
  { name: "NIMRA NAEEM", role: "Organizing Member" },
  { name: "IAN MUHUHU CHEGE", role: "Organizing Member" },
  { name: "PIUS M. KARIUKI", role: "Organizing Member" },
  { name: "ABDULLAH AL AHAD ABIR", role: "Organizing Member" },
  { name: "DAIM ASIF", role: "Organizing Member" },
  { name: "TARIKUL ISLAM RIMON", role: "Organizing Member" },
  { name: "ANINDO BASAK ANSHU", role: "Organizing Member" }
];

const OrganizingCommittee = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Organizing Committee
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {organizingCommittee.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-primary-500 overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-center text-white font-semibold mr-3">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 line-clamp-1">
                        {member.name}
                      </h3>
                      <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full inline-block">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
