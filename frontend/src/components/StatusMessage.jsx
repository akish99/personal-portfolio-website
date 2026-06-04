// export default function StatusMessage({ status }) {
//   if (!status?.message) return null;
//   const success = status.type === 'success';
//   return <div className={`mt-4 rounded-2xl border px-4 py-3 text-sm font-medium ${success ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200' : 'border-rose-200 bg-rose-50 text-rose-800 dark:border-rose-900 dark:bg-rose-950/60 dark:text-rose-200'}`}>{status.message}</div>;
// }



export default function StatusMessage({ status }) {
  if (!status?.message) return null;
  const success = status.type === 'success';

  return (
    <div
      className={`mt-4 rounded-2xl border px-4 py-3 text-sm font-medium ${
        success
          ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200'
          : 'border-rose-200 bg-rose-50 text-rose-800 dark:border-rose-900 dark:bg-rose-950/60 dark:text-rose-200'
      }`}
    >
      {status.message}
    </div>
  );
}