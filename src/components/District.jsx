// DistrictCards.jsx
import React from "react";

/* ---------- утилиты статусов ---------- */
const pm25Bands = [
    { max: 12, label: "Good", color: "text-emerald-600", ring: "from-emerald-500" },
    { max: 35, label: "Moderate", color: "text-yellow-600", ring: "from-yellow-400" },
    { max: 55, label: "Unhealthy", color: "text-orange-600", ring: "from-orange-500" },
    { max: 150, label: "Unhealthy", color: "text-red-600", ring: "from-red-500" },
    { max: 250, label: "Very bad", color: "text-fuchsia-600", ring: "from-fuchsia-500" },
    { max: 999, label: "Hazardous", color: "text-purple-700", ring: "from-purple-600" }
];

const co2Bands = [
    { max: 800, label: "Good", color: "text-emerald-600", ring: "from-emerald-500" },
    { max: 1000, label: "Moderate", color: "text-yellow-600", ring: "from-yellow-400" },
    { max: 1500, label: "Bad", color: "text-red-600", ring: "from-red-500" },
    { max: 9999, label: "Very bad", color: "text-fuchsia-600", ring: "from-fuchsia-500" }
];

function bandFor(value, bands) {
    return bands.find(b => value <= b.max) ?? bands[bands.length - 1];
}

/* ---------- мини-круг (прогресс) на conic-gradient ---------- */
function Ring({ value, max = 200, size = 64, band }) {
    const pct = Math.max(0, Math.min(100, (value / max) * 100));
    const bg = `conic-gradient(var(--ringColor) ${pct}%, rgba(0,0,0,0.08) ${pct}% 100%)`;
    return (
        <div
            className="relative grid place-items-center rounded-full"
            style={{ width: size, height: size, background: bg, ["--ringColor"]: "currentColor" }}
        >
            {/* внутренняя «пустота» */}
            <div className="absolute inset-1 rounded-full bg-white/90 backdrop-blur" />
            {/* число */}
            <div className="relative font-extrabold text-slate-800">{value}</div>
        </div>
    );
}

/* ---------- карточка района ---------- */
function DistrictCard({ name, pm25, co2 }) {
    const pmBand = bandFor(pm25, pm25Bands);
    const co2Band = bandFor(co2, co2Bands);

    return (
        <div className="rounded-2xl px-5 py-4 bg-white/35 backdrop-blur-md
                    border border-white/40 shadow-xl shadow-black/10">
            <div className="flex items-center justify-between gap-4">
                {/* название района */}
                <div className="min-w-40">
                    <div className="text-slate-900 font-extrabold text-xl leading-tight">
                        {name}
                    </div>
                </div>

                {/* PM2.5 блок */}
                <div className="flex items-center gap-3">
                    <div className={`text-4xl ${pmBand.color}`}>
                        <span className={pmBand.ring}>
                            <Ring value={pm25} max={200} band={pmBand} />
                        </span>
                    </div>
                    <div className="text-sm leading-tight">
                        <div className="font-semibold text-slate-700">
                            PM 2.5
                        </div>
                        <div className={`${pmBand.color} font-semibold`}>
                            {pmBand.label}
                        </div>
                    </div>
                </div>

                {/* CO2 блок */}
                <div className="flex items-center gap-3">
                    <div className={`text-4xl ${co2Band.color}`}>
                        <span className={co2Band.ring}>
                            <Ring value={co2} max={1500} band={co2Band} />
                        </span>
                    </div>
                    <div className="text-sm leading-tight">
                        <div className="font-semibold text-slate-700">
                            CO₂
                        </div>
                        <div className={`${co2Band.color} font-semibold`}>
                            {co2Band.label}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---------- список по всем районам ---------- */
export default function DistrictCards() {
    // сюда подставь реальные данные
    const districts = [
        { name: "Medeu", pm25: 140, co2: 800 },
        { name: "Bostandyk", pm25: 95, co2: 720 },
        { name: "Auezov", pm25: 60, co2: 900 },
        { name: "Alatau", pm25: 35, co2: 780 },
        { name: "Turksib", pm25: 150, co2: 1100 },
        { name: "Zhetysu", pm25: 80, co2: 850 },
        { name: "Nauryzbai", pm25: 55, co2: 700 },
        { name: "Almalinsky", pm25: 120, co2: 920 }
    ];

    return (
        <div className="container mx-auto px-4 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {districts.map(d => (
                    <DistrictCard key={d.name} {...d} />
                ))}
            </div>
        </div>
    );
}
