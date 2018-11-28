﻿//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.0.0 (NJsonSchema v9.12.2.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace HULAF.WebApi.Controllers
{
    #pragma warning disable // Disable all warnings

    [System.CodeDom.Compiler.GeneratedCode("NSwag", "12.0.0.0 (NJsonSchema v9.12.2.0 (Newtonsoft.Json v11.0.0.0))")]
    public abstract class LocationControllerBase : ControllerBase
    {
        /// <summary>Lists countries</summary>
        /// <returns>Country list.</returns>
        [Microsoft.AspNetCore.Mvc.HttpGet, Microsoft.AspNetCore.Mvc.Route("countrylist")]
        public abstract System.Threading.Tasks.Task<System.Collections.Generic.List<CountryDto>> Countrylist();
    
    }
    
    

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "9.12.2.0 (Newtonsoft.Json v11.0.0.0)")]
    public partial class CityDto 
    {
        [Newtonsoft.Json.JsonProperty("Guid", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public System.Guid Guid { get; set; }
    
        [Newtonsoft.Json.JsonProperty("Name", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public string Name { get; set; }
    
        [Newtonsoft.Json.JsonProperty("Country", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public CountryDto Country { get; set; } = new CountryDto();
    
        public string ToJson() 
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings { PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.All });
        }
        
        public static CityDto FromJson(string data)
        {
            return Newtonsoft.Json.JsonConvert.DeserializeObject<CityDto>(data, new Newtonsoft.Json.JsonSerializerSettings { PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.All });
        }
    
    }
    
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "9.12.2.0 (Newtonsoft.Json v11.0.0.0)")]
    public partial class CountryDto 
    {
        [Newtonsoft.Json.JsonProperty("Guid", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public System.Guid Guid { get; set; }
    
        [Newtonsoft.Json.JsonProperty("Name", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public string Name { get; set; }
    
        public string ToJson() 
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings { PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.All });
        }
        
        public static CountryDto FromJson(string data)
        {
            return Newtonsoft.Json.JsonConvert.DeserializeObject<CountryDto>(data, new Newtonsoft.Json.JsonSerializerSettings { PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.All });
        }
    
    }

}