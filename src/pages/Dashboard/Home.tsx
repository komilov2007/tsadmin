const Home = () => {
  return (
    <div className=" !h-183 bg-gray-900 text-white flex flex-col">
      <div
        className="flex flex-col justify-between p-8"
        style={{ height: 'calc(100vh - 64px)' }} // 64px → Header taxminiy height
      >
        {/* Top Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Users', value: '1,245', icon: '👤' },
            { title: 'Sales', value: '$12,340', icon: '💰' },
            { title: 'Orders', value: '432', icon: '🛒' },
            { title: 'Visits', value: '8,912', icon: '📈' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center hover:scale-[1.03] transition"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{stat.title}</h3>
              <p className="text-white/70 text-lg">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Middle Progress Bars */}
        <section className="flex flex-col justify-center gap-6 mt-8">
          {[
            {
              label: 'Project Completion',
              percent: 75,
              color: 'bg-indigo-500',
            },
            { label: 'Tasks Completed', percent: 60, color: 'bg-green-500' },
            { label: 'Team Efficiency', percent: 85, color: 'bg-pink-500' },
          ].map((item, idx) => (
            <div key={idx} className="w-full mx-auto max-w-3xl">
              <div className="flex justify-between mb-1 text-white">
                <span>{item.label}</span>
                <span>{item.percent}%</span>
              </div>
              <div className="w-full h-6 bg-gray-700 rounded-xl overflow-hidden">
                <div
                  className={`${item.color} h-6 rounded-xl transition-all duration-700`}
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </section>

        {/* Bottom KPI Boxes */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { title: 'Active Projects', value: 12 },
            { title: 'Pending Tasks', value: 5 },
            { title: 'Completed Tasks', value: 18 },
          ].map((kpi, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center hover:scale-[1.03] transition"
            >
              <h3 className="text-xl font-semibold mb-2">{kpi.title}</h3>
              <p className="text-white/70 text-2xl">{kpi.value}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
