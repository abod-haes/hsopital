import { create } from "zustand";
import { HospitalSection, ServiceType } from "@/types/types";

interface FilterState {
    selectedSection: HospitalSection | null;
    selectedService: ServiceType | null;
    setSelectedSection: (section: HospitalSection | null) => void;
    setSelectedService: (service: ServiceType | null) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
    selectedSection: null,
    selectedService: null,
    setSelectedSection: (section) => set({ selectedSection: section }),
    setSelectedService: (service) => set({ selectedService: service }),
}));
