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

export interface AcademicDegree{
  id:string;
  name:string;
    
}
