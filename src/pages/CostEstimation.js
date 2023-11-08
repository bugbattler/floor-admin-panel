import React, { useState } from 'react'

const CostEstimation = () => {
    
    const [data, setData] = useState({
        carpet: "",
        glueDownPrice: "",
        CarpetStairs: "",
        HardwoodEngineered: "",
        EngineeredDoubleGlue: "",
        Parquet: "",
        Laminate: "",
        VinylPlank: "",
        SheetVinyl: "",
        Marmoleum: "",
        Tile: "",
        Patch: "",
        SelfLeveling: "",
        FastenScrewDownSubFloor: "",
        SubFloor: "",
        DmxStep: "",
        Tile_s: "",
        Tile_ss: "",
        Tile_sss: "",
        HardwoodEngineered_2: "",
        Engineered_2: "",
        Laminate_2: "",
        VinylPlank_2: "",
        Cork: "",
        SheetVinyl_2: "",
        VinylTilePlank: "",
        VinylBase: "",
        Marmoleum: "",
        WeldingRods: "",
        FlushCoveCap: "",
        Carpet_1: "",
        CarpetGlueDown_1: "",
        CarpetTiles: "",
        CarpetBase: "",
        Boxed: "",
        Pies: "",
        OneSideCap : "",
        TwoSideCap : "",
        Laminate_1 : "",
        Vinyl : "",
        CarpetInstallFlight : "",
        CarpetRunner : "",
        Hollywood : "",
        PicketInstall : "",
        PostInstall : "",
        HandRailNosing : "",
        CarpetBinding : "",
        CarpetBaseInstall : "",
        VinylBaseInstall : "",
        ShoeMouldQRound  : "",
        UptoMDFBase  : ""
    })
    
    const SaveData = () => {
        console.log(data);
    }
    return (
        <>
            <div className=''>
                <h3 className="mb-4 title">Removal & Disposal</h3>
                <form class="row g-3 pt-2 shadow p-3 mb-5" style={{ padding: 20, backgroundColor: "#f7f6ed" }} >

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-6">
                                    <label for="inputPassword6 " class="col-form-label txt-input"> &nbsp;Carpet <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.carpet} onChange={(e) => setData({ ...data, carpet: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-6">
                                    <label for="inputPassword6" class="col-form-label txt-input">Carpet / Glue Down <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group  " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.glueDownPrice} onChange={(e) => setData({ ...data, glueDownPrice: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-6">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Carpet - Stairs(Min.Fee) <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.CarpetStairs} onChange={(e) => setData({ ...data, CarpetStairs: e.target.value })} />
                                        <span class="input-group-text">/ step</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="row">
                                <div class="col-md-6">
                                    <label for="inputPassword6" class="col-form-label txt-input">Hardwood & Engineered(Nail)<span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.HardwoodEngineered} onChange={(e) => setData({ ...data, HardwoodEngineered: e.target.value })} />
                                        <span class="input-group-text">/ step </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-6">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Engineered(Double Glue) <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.EngineeredDoubleGlue} onChange={(e) => setData({ ...data, EngineeredDoubleGlue: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-6">
                                    <label for="inputPassword6" class="col-form-label txt-input">Parquet<span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Parquet} onChange={(e) => setData({ ...data, Parquet: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-6">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Laminate <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Laminate} onChange={(e) => setData({ ...data, Laminate: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-6">
                                    <label for="inputPassword6" class="col-form-label txt-input">Vinyl Plank<span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.VinylPlank} onChange={(e) => setData({ ...data, VinylPlank: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-6">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Sheet Vinyl <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.SheetVinyl} onChange={(e) => setData({ ...data, SheetVinyl: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-6">
                                    <label for="inputPassword6" class="col-form-label txt-input">Marmoleum<span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Marmoleum} onChange={(e) => setData({ ...data, Marmoleum: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-6">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Tile <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Tile} onChange={(e) => setData({ ...data, Tile: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-6">
                                </div>
                                <div className="col-md-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className='pt-3'>
                <h3 className="mb-4 title my-3">Floor Preparation</h3>
                <form class="row g-3 pt-3 shadow p-3 mb-5" style={{ padding: 20, backgroundColor: "#f7f6ed" }} >

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Patch (Standard) <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Patch} onChange={(e) => setData({ ...data, Patch: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Self Leveling (Supply & Install) <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.SelfLeveling} onChange={(e) => setData({ ...data, SelfLeveling: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Fasten / Screw Down Sub Floor <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.FastenScrewDownSubFloor} onChange={(e) => setData({ ...data, FastenScrewDownSubFloor: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Sub Floor (Supply & Install) <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.SubFloor} onChange={(e) => setData({ ...data, SubFloor: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Dmx-1 Step (Install)  <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.DmxStep} onChange={(e) => setData({ ...data, DmxStep: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                </div>
                                <div className="col-md-6">

                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

            <div className='pt-3'>
                <h3 className="mb-4 title my-3">Tile (Install)</h3>
                <form class="row g-3 pt-3 shadow p-3 mb-5" style={{ padding: 20, backgroundColor: "#f7f6ed" }} >

                    <div class="row g-2 align-items-center">
                        <h6 className='fw-bold' style={{fontSize:"18px"}}>Includes All Setting Materials</h6>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-6">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Tile 12"X24"-24"X24"-24"X48"<span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Tile_s} onChange={(e) => setData({ ...data, Tile_s: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Tile 32"X64"<span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Tile_ss} onChange={(e) => setData({ ...data, Tile_ss: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-6">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Tile 4'X6' And Larger<span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Tile_sss} onChange={(e) => setData({ ...data, Tile_sss: e.target.value })} />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>

            <div className='pt-3'>
                <h3 className="mb-4 title my-3">Hardwood & Engineered (Install)</h3>
                <form class="row g-3 pt-3 shadow p-3 mb-5" style={{ padding: 20, backgroundColor: "#f7f6ed" }} >

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Hardwood & Engineered (Install) <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.HardwoodEngineered_2} onChange={(e) => setData({...data,HardwoodEngineered_2:e.target.value})}/>
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Engineered (Click) <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Engineered_2} onChange={(e) => setData({...data,Engineered_2:e.target.value})}/>
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Engineered (Nail With Gkue Assist) <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Engineered(Double Glue) <span className="text-danger">*</span>:</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Herringbone Nail Only  <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Herringbone Glue Down <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Custom Borders & Insert <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                        <span class="input-group-text">/ TBD</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Parquet Installation <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

            <div className='pt-3'>
                <h3 className="mb-4 title my-3">Laminate / Vinyl Plank / Cork / Marmoleum (Install)</h3>
                <form class="row g-3 pt-3 shadow p-3 mb-5" style={{ padding: 20, backgroundColor: "#f7f6ed" }} >

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Laminate<span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Laminate_2} onChange={(e) => setData({...data,Laminate_2:e.target.value})}/>
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Vinyl Plank <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.VinylPlank_2} onChange={(e) => setData({...data,VinylPlank_2:e.target.value})}/>
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Cork <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Cork} onChange={(e) => setData({...data,Cork:e.target.value})}/>
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Sheet Vinyl <span className="text-danger">*</span>:</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.SheetVinyl_2} onChange={(e) => setData({...data,SheetVinyl_2:e.target.value})}/>
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Vinyl Tile/ Plank (Glue Down)<span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.VinylTilePlank} onChange={(e) => setData({...data,VinylTilePlank:e.target.value})}/>
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Vinyl Base<span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.VinylBase} onChange={(e) => setData({...data,VinylBase:e.target.value})}/>
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Marmoleum <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Marmoleum} onChange={(e) => setData({...data,Marmoleum:e.target.value})}/>
                                        <span class="input-group-text">/ sq. yd.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Welding Rods (Supply & Install) <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.WeldingRods} onChange={(e) => setData({...data,WeldingRods:e.target.value})}/>
                                        <span class="input-group-text">/ Ln. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Flush Cove & Cap<span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.FlushCoveCap} onChange={(e) => setData({...data,FlushCoveCap:e.target.value})}/>
                                        <span class="input-group-text">/ Pc</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                </div>
                                <div className="col-md-7">

                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

            <div className='pt-3'>
                <h3 className="mb-4 title my-3">Carpet (Install)</h3>
                <form class="row g-3 pt-3 shadow p-3 mb-5" style={{ padding: 20, backgroundColor: "#f7f6ed" }} >

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Carpet <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Carpet_1} onChange={(e) => setData({...data,Carpet_1:e.target.value})}/>
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Carpet Glue Down <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.CarpetGlueDown_1} onChange={(e) => setData({...data,CarpetGlueDown_1:e.target.value})}/>
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Carpet Tiles (Adhesive Included) <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.CarpetTiles} onChange={(e) => setData({...data,CarpetTiles:e.target.value})}/>
                                        <span class="input-group-text">/ sq. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Carpet Base <span className="text-danger">*</span>:</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.CarpetBase} onChange={(e) => setData({...data,CarpetBase:e.target.value})}/>
                                        <span class="input-group-text">/ Ln. ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

            <div className='pt-3'>
                <h3 className="mb-4 title my-3">Stairs (Supply & Install)</h3>
                <form class="row g-3 pt-3 shadow p-3 mb-5" style={{ padding: 20, backgroundColor: "#f7f6ed" }} >

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Boxed (Up To 42") <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Boxed} onChange={(e) => setData({...data,Boxed:e.target.value})}/>
                                        <span class="input-group-text">/ step</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Pies <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Pies} onChange={(e) => setData({...data,Pies:e.target.value})}/>
                                        <span class="input-group-text">/ step</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">One Side Cap (Up To 42")<span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.OneSideCap} onChange={(e) => setData({...data,OneSideCap:e.target.value})}/>
                                        <span class="input-group-text">/ step</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Two Side Cap (Up To 42")<span className="text-danger">*</span>:</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.TwoSideCap} onChange={(e) => setData({...data,TwoSideCap:e.target.value})}/>
                                        <span class="input-group-text">/ step</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Laminate <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Laminate_1} onChange={(e) => setData({...data,Laminate_1:e.target.value})}/>
                                        <span class="input-group-text">/ step</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Vinyl <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Vinyl} onChange={(e) => setData({...data,Vinyl:e.target.value})}/>
                                        <span class="input-group-text">/ step</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Carpet Install / Flight Of 12 Steps<span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.CarpetInstallFlight} onChange={(e) => setData({...data,CarpetInstallFlight:e.target.value})}/>
                                        <span class="input-group-text">/ 12 steps</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Carpet Runner <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.CarpetRunner} onChange={(e) => setData({...data,CarpetRunner:e.target.value})}/>
                                        <span class="input-group-text">/ step</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Hollywood <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.Hollywood} onChange={(e) => setData({...data,Hollywood:e.target.value})}/>
                                        <span class="input-group-text">/ step</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Picket Install <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.PicketInstall} onChange={(e) => setData({...data,PicketInstall:e.target.value})}/>
                                        <span class="input-group-text">/ Pc</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Post Install <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.PostInstall} onChange={(e) => setData({...data,PostInstall:e.target.value})}/>
                                        <span class="input-group-text">/ Pc</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Hand Rail, Nosing (Sand & Stain) <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.HandRailNosing} onChange={(e) => setData({...data,HandRailNosing:e.target.value})}/>
                                        <span class="input-group-text">/ Ln.ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

            <div className='pt-3'>
                <h3 className="mb-4 title my-3">Base Boards & Transitions (Install)</h3>
                <form class="row g-3 pt-3 shadow p-3 mb-5" style={{ padding: 20, backgroundColor: "#f7f6ed" }} >

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Carpet Binding <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.CarpetBinding} onChange={(e) => setData({...data,CarpetBinding:e.target.value})}/>
                                        <span class="input-group-text">/ Ln.ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Carpet Base Install <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.CarpetBaseInstall} onChange={(e) => setData({...data,CarpetBaseInstall:e.target.value})}/>
                                        <span class="input-group-text">/ Ln.ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Vinyl Base Install<span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.VinylBaseInstall} onChange={(e) => setData({...data,VinylBaseInstall:e.target.value})}/>
                                        <span class="input-group-text">/ Ln.ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6" class="col-form-label txt-input">Shoe Mould/Q-Round (Primed)<span className="text-danger">*</span>:</label>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3 " style={{ width: "200px" }} >
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.ShoeMouldQRound} onChange={(e) => setData({...data,ShoeMouldQRound:e.target.value})}/>
                                        <span class="input-group-text">/ Ln.ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-2 align-items-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                    <label for="inputPassword6 " class="col-form-label txt-input">Upto 5" MDF Base (Supply & Install) <span className="text-danger">*</span> :</label>
                                </div>
                                <div className="col-md-7">
                                    <div class="input-group mb-3 " style={{ width: "200px" }}>
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value={data.UptoMDFBase} onChange={(e) => setData({...data,UptoMDFBase:e.target.value})}/>
                                        <span class="input-group-text">/ Ln.ft.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-5">
                                </div>
                                <div className="col-md-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


            <div class="col-md-12 text-center " style={{ marginTop: 50 }}>
                <button type="submit" class="btn btn-primary fw-bold shadow border-0 pt-2" style={{ backgroundColor: "#e67929", width: 150, height:50 }} onClick={(e) => { SaveData() }}>Submit</button>
            </div>

        </>
    )
}

export default CostEstimation

