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
export interface RegistrationData {
    Id: number;
    FullName: string;
    AcademicDegree: number;
    PhoneNumber: string;
    Email: string;
    Nationality: number;
    NationalId: string;
    NationalIdPath: string;
    SyndicateCard: string;
    PersonalPhoto: string;
    Address: string;
}

export interface EventData {
    Id: number;
    MedicalSpecialty: string;
    Workplace: number;
    Country: string;
    TypeofParticipation: number;
    TitleOfLecture: string;
    AbstractOfLecture: string;
    AbstractOfLecturePath: string;
    AttendanceDate: string;
    CVPath: string;
    SyndicateCard: string;
    AccommodationBooking: number;
    CertificatePath: string;
    AttendanceCertificatePath: string;
}

export interface User {
    id: number;
    fullName: string;
    academicDegree: number;
    phoneNumber: string;
    email: string;
    nationality: number;
    nationalId: string;
    nationalIdPath: any;
    syndicateCard: any;
    personalPhoto: any;
    address: string;
    deleted: number;
    password: string;
    userID: string;
    jobTitle: any;
    facebookUrl: string;
    instagramUrl: any;
    linkedinUrl: any;
    createDate: string;
}

export interface Accommodation {
    id: number;
    name: string;
    description: string;
    distance: string;
    price: number;
    starts: number;
    location: string;
    deleted: number;
    createDate: string;
    createBy: string;
    accommodationImages: AccommodationImage[];
}

export interface AccommodationImage {
    id: number;
    accommodationID: number;
    image: string;
    accommodationIDNavigation: any;
}


export interface Sponsor {
    id: number
    image: string
    url?: string
    deleted: number
    createBy: string
    createDate: string
  }