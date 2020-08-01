import React, { useEffect } from "react";
import * as GetProduct from "../actions/get.action";
import { useDispatch, connect, useSelector } from "react-redux";

const CardNew = () => {
  const dispatch = useDispatch();
  const getProductReducer = useSelector(
    ({ getProductReducer }) => getProductReducer
  );

  useEffect(() => {
    dispatch(GetProduct.getProduct());
  }, [dispatch]);
  const showNew = getProductReducer.result ? (
    getProductReducer.result.map((Product) => {
      return (
        <div className="w-full border mt-5 rounded flex justify-center">
          <div className=" -ml-20 -mr-12 px-20">
            <h1 className="text-3xl pt-10 text-center">{Product.name}</h1>
            <div className="text-gray-600 pt-1 ">
              
                <p className="pr-5 text-left text-right">{Product.date}</p>
            
              <div className="m-10">
                <q className="m-20 text-2xl text-justify">{Product.detail}</q>
              </div>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div>No Product</div>
  );
  return (
    <div className="lg:container mx-auto max-w-sm py-5 my-10">
      <h1 className="pb-5 pl-2 text-2xl">New Choice Novel</h1>
      <div className="flex flex-col">{showNew}</div>
    </div>
  );
};
const mapStateToProps = ({ getProductReducer }) => ({ getProductReducer });

const mapDispatchToProps = {
  GetProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardNew);
