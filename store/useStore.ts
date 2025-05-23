import { hospitalSections, serviceTypes } from "@/constant/const";
import { create } from "zustand";

export interface Section {
    id: number;
    name: string;
}

export interface ServiceType {
    id: number;
    name: string;
}

interface StoreState {
    sections: Section[];
    serviceTypes: ServiceType[];
    selectedSection: Section | null;
    selectedServiceType: ServiceType | null;
    setSections: (sections: Section[]) => void;
    setServiceTypes: (serviceTypes: ServiceType[]) => void;
    setSelectedSection: (section: Section | null) => void;
    setSelectedServiceType: (serviceType: ServiceType | null) => void;
}

export const useStore = create<StoreState>((set) => ({
    sections: hospitalSections,
    serviceTypes: serviceTypes,
    selectedSection: null,
    selectedServiceType: null,
    setSections: (sections) => set({ sections }),
    setServiceTypes: (serviceTypes) => set({ serviceTypes }),
    setSelectedSection: (section) => set({ selectedSection: section }),
    setSelectedServiceType: (serviceType) =>
        set({ selectedServiceType: serviceType }),
}));
