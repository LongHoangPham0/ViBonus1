import React, { useEffect, useState } from "react";
import "./css/topproducts.css";
import ImgProd from "../../../assets/images/rectangle52.png";
import { GET_TOP_PRODUCTS_REQUEST } from "../../../redux/reducer/topproductReducer/actionTypes";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
export default function Topproducts() {
  const { products } = useAppSelector((state) => state.topproductReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: GET_TOP_PRODUCTS_REQUEST,
    });
  }, [dispatch]);

  return (
    <>
      <h4>Top Products</h4>

      {products?.data.map((item: any, index: number) => {
        return (
          <div key={index} className="topproducts">
            <div className="img-card">
              <img className="img-product" src={item.image} alt={item.name} />
            </div>
            <span title={item.name} className="name-product">
              {item.name}
            </span>
          </div>
        );
      })}
    </>
  );
}
