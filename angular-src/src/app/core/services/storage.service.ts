import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    anotherTodolist = [];

    constructor(
        @Inject(LOCAL_STORAGE) private storage: StorageService) { }

    public storeOnLocalStorage(key, data): void {
        this.storage.set(key, data);
        console.log(this.storage.get(key) || 'LocaL storage is empty');
    }

    public getFromLocalStorage(key): any {
        return this.storage.get(key) || {};
    }

    public removeKey(key){
        return this.storage.remove(key);
    }
}