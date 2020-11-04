export class ProfileModel{
    private _id: number;
    private _nom: string;
    private _prenom: string;
    private _dateNaiss: Date;
    private _adresse: string;
    private _tel?: string;
    private _groupeSanguin?: string;
    private _username: string;
    private _password: string;
    private _email?: string;
    private _photo?: string;
    private _data?: Blob;
    private _file?: File;


    constructor() {
        this._username= '';
        this._password = '';
        this._email= '';
        this._photo = '';
        this._nom = '';
        this._prenom = '';
        this._dateNaiss = new Date();
        this._groupeSanguin= '';
        this._tel= '';
        this._data= new Blob();
        this._adresse = '';
        this._file= new File(null,'')
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get prenom(): string {
        return this._prenom;
    }

    set prenom(value: string) {
        this._prenom = value;
    }

    get dateNaiss(): Date {
        return this._dateNaiss;
    }

    set dateNaiss(value: Date) {
        this._dateNaiss = value;
    }

    get adresse(): string {
        return this._adresse;
    }

    set adresse(value: string) {
        this._adresse = value;
    }

    get tel(): string {
        return this._tel;
    }

    set tel(value: string) {
        this._tel = value;
    }

    get groupeSanguin(): string {
        return this._groupeSanguin;
    }

    set groupeSanguin(value: string) {
        this._groupeSanguin = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get photo(): string {
        return this._photo;
    }

    set photo(value: string) {
        this._photo = value;
    }

    get data(): Blob {
        return this._data;
    }

    set data(value: Blob) {
        this._data = value;
    }

    get file(): File {
        return this._file;
    }

    set file(value: File) {
        this._file = value;
    }
}
