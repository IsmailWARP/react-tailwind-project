import React from "react";

export default function Card(props) {
    return (
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
    <div class="md:flex">
        <div class="md:shrink-0">
        <img class="h-48 w-full object-cover md:h-full md:w-48" src={props.imageUrl} alt="Man looking at item at a store" />
        </div>
        <div class="p-8">
        <div class=" tracking-wide text-sm text-indigo-500 font-semibold"><i class="fa-solid fa-location-dot text-pink"></i><span className="uppercase tracking-widest ml-1">{props.location}</span>
        <a href={props.googleMaps} className="pl-4 underline">View on Google Maps</a>
        </div>
        <h1 class="block mt-1 text-4xl  font-bold text-black">{props.title}</h1>
        <p className="font-bold mt-5">{props.startDate} - {props.endDate}</p>
        <p class="mt-1 text-slate-500">{props.description}</p>
        </div>
    </div>
    </div>
    )
}
