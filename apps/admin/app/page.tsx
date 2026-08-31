export default function AdminDashboardPage() {
  return (
    <main className="p-8 max-w-5xl mx-auto">
      <header className="mb-8 pb-6 border-b border-black/5 flex justify-between items-center">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-[#7A9A82] bg-[#7A9A82]/15 px-3 py-1 rounded-full">
            Lotus Internal Portal
          </span>
          <h1 className="text-3xl font-bold text-[#241C18] mt-2">
            Dashboard Manajemen Lotus Semarang
          </h1>
        </div>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
          <span className="text-xs text-black/50 font-bold uppercase tracking-wider">Layanan Aktif</span>
          <p className="text-3xl font-bold text-[#D97087] mt-2">4 Layanan</p>
          <span className="text-xs text-black/60 mt-1 block">Akupunktur, Hidroterapi, Fisioterapi, Swim Course</span>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
          <span className="text-xs text-black/50 font-bold uppercase tracking-wider">WhatsApp Hotline</span>
          <p className="text-2xl font-bold text-[#2D4836] mt-2">+62 877-0030-3645</p>
          <span className="text-xs text-black/60 mt-1 block">Reservasi Pasien Terintegrasi</span>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
          <span className="text-xs text-black/50 font-bold uppercase tracking-wider">Status Web Utama</span>
          <p className="text-2xl font-bold text-[#5A9491] mt-2">Online (Ready)</p>
          <span className="text-xs text-black/60 mt-1 block">apps/web @ localhost:3000</span>
        </div>
      </div>

      <section className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
        <h2 className="text-xl font-bold text-[#241C18] mb-4">Informasi Sistem</h2>
        <p className="text-sm text-black/70 leading-relaxed">
          Portal admin internal Lotus Semarang telah siap. Modul manajemen data reservasi, konfigurasi jadwal sesi, dan master data terapis dapat dikembangkan di workspace ini.
        </p>
      </section>
    </main>
  );
}
