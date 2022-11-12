import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    createData(url: string, data: any) {
        return this.http.post(url, data);
    }

    readData(url: string) {
        return this.http.get(url);
    }

    updateData(url: string, data: any) {
        return this.http.put(url + '/' + data.id, data);
    }

    deleteData(url: string, id: number) {
        return this.http.delete(url + '/' + id);
    }
}
