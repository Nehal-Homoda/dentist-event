export interface RegistrationPackage {
    title: string;
    description: string;
    offers: RegistrationPackageOffer[];
}

export interface RegistrationPackageOffer {
    title: string;
    price: string;
    image: string;
    programs: RegistrationPackageOfferProgram[];
}

export interface RegistrationPackageOfferProgram {
    title: string;
    subtitle: string;
    id: string;
}

export interface AcademicDegree {
    id: string;
    name: string;
}

export interface AppSettingData {
    id: number;
    location: string;
    phone: string;
    mail: string;
    facebookUrl: string;
    instagramUrl: string;
    linkedinUrl: string;
    about: string;
}

export interface AppMasterClass {
    id: number;
    image: string;
    name: string;
    jobTitle: string;
    deleted: number;
    createBy: string;
    createDate: string;
}
