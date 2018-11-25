﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.0.0 (NJsonSchema v9.12.2.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export module PersonModule {
namespace HULAF.Domain.Person {

export interface IPersonClient {
    /**
     * Gets a missing person by guid.
     * @param personGuid Guid of person
     * @return Returns a missing person
     */
    getMissingPerson(personGuid: string): Promise<MissingPersonDto>;
    /**
     * Lists missing persons
     * @return Missing person list.
     */
    getMissingPersonList(): Promise<MissingPersonDto[]>;
    /**
     * A person seeks a missing person
     * @return Get a person by guid
     */
    seekerperson(): Promise<SeekerPersonDto>;
}

export class PersonClient implements IPersonClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "/api";
    }

    /**
     * Gets a missing person by guid.
     * @param personGuid Guid of person
     * @return Returns a missing person
     */
    getMissingPerson(personGuid: string): Promise<MissingPersonDto> {
        let url_ = this.baseUrl + "/missingperson/{personGuid}";
        if (personGuid === undefined || personGuid === null)
            throw new Error("The parameter 'personGuid' must be defined.");
        url_ = url_.replace("{personGuid}", encodeURIComponent("" + personGuid)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetMissingPerson(_response);
        });
    }

    protected processGetMissingPerson(response: Response): Promise<MissingPersonDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? MissingPersonDto.fromJS(resultData200) : new MissingPersonDto();
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MissingPersonDto>(<any>null);
    }

    /**
     * Lists missing persons
     * @return Missing person list.
     */
    getMissingPersonList(): Promise<MissingPersonDto[]> {
        let url_ = this.baseUrl + "/missingpersonlist";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetMissingPersonList(_response);
        });
    }

    protected processGetMissingPersonList(response: Response): Promise<MissingPersonDto[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(MissingPersonDto.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MissingPersonDto[]>(<any>null);
    }

    /**
     * A person seeks a missing person
     * @return Get a person by guid
     */
    seekerperson(): Promise<SeekerPersonDto> {
        let url_ = this.baseUrl + "/seekerperson";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processSeekerperson(_response);
        });
    }

    protected processSeekerperson(response: Response): Promise<SeekerPersonDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? SeekerPersonDto.fromJS(resultData200) : new SeekerPersonDto();
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<SeekerPersonDto>(<any>null);
    }
}

export class MissingPersonDto implements IMissingPersonDto {
    guid?: string;
    name?: string;

    constructor(data?: IMissingPersonDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.guid = data["guid"];
            this.name = data["name"];
        }
    }

    static fromJS(data: any): MissingPersonDto {
        data = typeof data === 'object' ? data : {};
        let result = new MissingPersonDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["guid"] = this.guid;
        data["name"] = this.name;
        return data; 
    }
}

export interface IMissingPersonDto {
    guid?: string;
    name?: string;
}

export class SeekerPersonDto implements ISeekerPersonDto {
    guid?: string;
    name?: string;

    constructor(data?: ISeekerPersonDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.guid = data["guid"];
            this.name = data["name"];
        }
    }

    static fromJS(data: any): SeekerPersonDto {
        data = typeof data === 'object' ? data : {};
        let result = new SeekerPersonDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["guid"] = this.guid;
        data["name"] = this.name;
        return data; 
    }
}

export interface ISeekerPersonDto {
    guid?: string;
    name?: string;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if(result !== null && result !== undefined)
        throw result;
    else
        throw new SwaggerException(message, status, response, headers, null);
}

}
}