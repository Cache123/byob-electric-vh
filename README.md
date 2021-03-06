### Top-Companies Documentation

##### Built by Samuel Singer and Pat Neel

#### GET API Endpoints

`/api/v1/companies`
```json
{
  {
    "id":1, 
    "companyName": "Top Gun", 
    "industry": "military", 
    "location": "California", 
    "revenueGrowth": "1200000"
  },
  {
    "id":2, 
    "companyName": "Stark Industries", 
    "industry": "military", 
    "location": "New York", 
    "revenueGrowth": "1200"
  }
}
```

`/api/v1/branches`
```json
{
  {
    "id":1, 
    "companyName": "Wayne Corporations"
    "employees": "1298",
    "branchName": "Google X",
    "grossRevenue": "189900"

  },
  {
    "id":2, 
    "companyName": "Sky News"
    "employees": "1298",
    "branchName": "Sky Sports UK",
    "grossRevenue": "189900"

  }
}
```

`/api/v1/companies/show?industry=technology`

```json
{
  {
    "id":1, 
    "companyName": "Google", 
    "industry": "technlogy", 
    "location": "California", 
    "revenueGrowth": "1200000"
  },
  {
    "id":2, 
    "companyName": "GitHub", 
    "industry": "technology", 
    "location": "New York", 
    "revenueGrowth": "1200"
  }
}
```

#### POST API Endpoints

`/api/v1/companies`

##### Required Parameters

##### companyName string REQUIRED. The name of the cmpany
##### industry string REQUIRED. The industry of the company
##### location string REQUIRED. The location of the company.
##### revenueGrowth string REQUIRED. The revenue growth for the company.

`/api/v1/branches`

#### Required Parameters

##### companyName string REQUIRED. The name of the cmpany
##### employees string REQUIRED. The number of employees for the company
##### branchName string REQUIRED. The branch name of the company.
##### grossRevenue string REQUIRED. The the gross revenue for the company.

#### PATCH API Endpoints

`/api/v1/companies`

##### request parameter id that the user is updating to


`/api/v1/branches`

##### request parameter id that the user is updating to

#### DELETE API Endpoints

`/api/v1/branches`

##### request parameter id that the user is deleting to

`/api/v1/companies`

##### request parameter id that the user is deleting to

