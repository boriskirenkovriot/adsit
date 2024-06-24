return this._http.get(`api/data`)
  .map((response: Response) => {
    var result = response.json();
    console.log(result);
    return result;
  });
