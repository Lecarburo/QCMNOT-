export default function ProgressCard({ title, value, total, icon: Icon, helper }) {
  const percentage = total ? Math.round((value / total) * 100) : value;

  return (
    <div className="glass rounded-lg p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-white">{percentage}%</p>
        </div>
        {Icon && (
          <div className="grid h-11 w-11 place-items-center rounded-md bg-cyan-300/12 text-cyan-200 ring-1 ring-cyan-300/20">
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 transition-all duration-500"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      {helper && <p className="mt-3 text-sm text-slate-400">{helper}</p>}
    </div>
  );
}
