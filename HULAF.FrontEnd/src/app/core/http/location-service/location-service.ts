﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.0.0 (NJsonSchema v9.12.2.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export module LocationModule {
namespace HULAF.Domain.Location {

export interface ILocationClient {
    /**
     * Lists countries
     * @return Country list.
     */
    getCountryList(): Promise<CountryDto[]>;
}

export class LocationClient implements ILocationClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "/api";
    }

    /**
     * Lists countries
     * @return Country list.
     */
    getCountryList(): Promise<CountryDto[]> {
        let url_ = this.baseUrl + "/countrylist";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetCountryList(_response);
        });
    }

    protected processGetCountryList(response: Response): Promise<CountryDto[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(CountryDto.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CountryDto[]>(<any>null);
    }
}

export class CityDto implements ICityDto {
    guid?: string;
    name?: string;
    country?: CountryDto;

    constructor(data?: ICityDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.country = new CountryDto();
        }
    }

    init(data?: any) {
        if (data) {
            this.guid = data["Guid"];
            this.name = data["Name"];
            this.country = data["Country"] ? CountryDto.fromJS(data["Country"]) : new CountryDto();
        }
    }

    static fromJS(data: any): CityDto {
        data = typeof data === 'object' ? data : {};
        let result = new CityDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Guid"] = this.guid;
        data["Name"] = this.name;
        data["Country"] = this.country ? this.country.toJSON() : <any>undefined;
        return data; 
    }
}

export interface ICityDto {
    guid?: string;
    name?: string;
    country?: CountryDto;
}

export class CountryDto implements ICountryDto {
    guid?: string;
    name?: string;

    constructor(data?: ICountryDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.guid = data["Guid"];
            this.name = data["Name"];
        }
    }

    static fromJS(data: any): CountryDto {
        data = typeof data === 'object' ? data : {};
        let result = new CountryDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Guid"] = this.guid;
        data["Name"] = this.name;
        return data; 
    }
}

export interface ICountryDto {
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