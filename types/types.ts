export type HospitalSection = {
    id: number;
    name: string;
};

export type ServiceType = {
    id: number;
    name: string;
};

export type Location = {
    id: number;
    name: string;
};
export interface Doctor {
    id: number;
    name: string;
    specialization: string;
    availableSlots: string[];
}
