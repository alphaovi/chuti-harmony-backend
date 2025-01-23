export type TProjectFullDetails = {
    projectName: string;
    projectCoverPhoto: string;
    // at a glance
    status: "ongoing" | "upcoming" | "completed";
    address: string;
    architectName: string;
    landArea: string;
    facing: string;
    frontRoad: string;
    sizeOfUnits: string;
    numberOfCarParking: string;
    landScapingConsultant: string;
    loadOrientation: string;
    specialtyOfTheLand: string;
    numberOfApartments: number;
    numberOfBaseMents: number;
    rajukApprovalNo: string;
    projectPhotos: string[];
}