import axios from "axios";
import React, { useEffect, useState } from "react";


const Brand = () => {
  const [Allbrand, setAllbrand]=useState();

  const [data, setData] = useState({
    brand_name: ""
  })

  const SaveData = (e) => {
    e.preventDefault()
    console.log(23,data.brand_name);
    axios.post("http://174.138.112.6/api/brand/create",data )
    .then((res) => {
      const response = res.data.brand
      alert("Form Submited")
    })
    .catch((err) => { console.log(err) })
  }

  return (
    <div>
      <h3 className="mb-4 title">Brands</h3>

      <form class="row g-3 pt-3 shadow p-3 mb-5" style={{ padding: 20, backgroundColor: "#f7f6ed" }} >
        <div class="col-md-7">
          <label for="inputEmail4" class="form-label txt-input">Brand <span className="text-danger">*</span></label>
          <input type="text" class="form-control" id="inputEmail4" placeholder="Enter brand name.." value={data.brand_name} onChange={(e) => {setData({ ...data, brand_name: e.target.value }); console.log(e.target.value)}}/>
        </div>

        <div class="col-md-6">
          <label for="formFile" class="form-label txt-input">Upload File <span className="text-danger">*</span></label>
          <input class="form-control" type="file" id="formFile"  />
        </div>

        <div class="col-md-12 " style={{ marginTop: 20 }}>
          <button type="submit" class="btn btn-primary shadow border-0 p-2" style={{ backgroundColor: "#e67929", width: 100, }} onClick={(e) => { SaveData(e) }}>Submit</button>
        </div>
      </form>

    </div>
  );
};

export default Brand;
