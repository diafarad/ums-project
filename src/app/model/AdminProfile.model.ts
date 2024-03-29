export interface AdminProfileModel{
    id: number;
    nom: string;
    prenom: string;
    dateNaiss: Date;
    adresse: string;
    tel?: string;
    groupeSanguin?: string;
    username: string;
    password: string;
    email?: string;
    photo?: string;
    blob?:string;
}
