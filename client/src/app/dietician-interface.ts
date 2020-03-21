import { Binary } from '@angular/compiler';

export interface IDietician{
    id: string;
    name: string;
    experience: number;
    image: string;
    specializations: Array<string>;
    certifications: Array<string>;
    contact_phone: string;
}