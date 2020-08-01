import React, { useState } from "react";
import * as AddAction from "./../actions/add.action";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";

const AddProduct = (props) => {
  const dispatch = useDispatch();
  const [AddProduct, setAddProduct] = useState({
    name: "",
    price: "",
    stock: "",
    detail: "",
    img: "",
  });

  const showPreviewImage = (value) => {
    if (value.file_obj) {
      return (
        <img
          src={value.file_obj}
          className="w-full rounded-lg h-full w-full z-10"
        />
      );
    } else {
      return (
        <img className="w-full rounded-lg bg-orange-300 h-full w-full z-10" />
      );
    }
  };

  const showForm = ({ values, setFieldValue }) => {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(AddAction.addProduct({ ...AddProduct, ...props }));
        }}
      >
        <div className="flex flex-row mt-5 pl-10">
          <div className="max-w-sm -ml-20 px-10 w-full rounded">
            {showPreviewImage(values)}
          </div>
          <div className="w-full">
            <div className="flex flex-row">
              <div className="h-12 w-full border rounded-lg mb-10 mr-5">
                <input
                  value={AddProduct.name}
                  onChange={(e) => {
                    setAddProduct({ ...AddProduct, name: e.target.value });
                  }}
                  type="text"
                  name="name"
                  id="title"
                  className="w-full h-12 bg-transparent pl-5 outline-none"
                  placeholder="ชื่อบทความ"
                />
              </div>
              <div className="h-12 w-full border rounded-lg mb-10 mr-5">
                <input
                  value={AddProduct.price}
                  onChange={(e) => {
                    setAddProduct({ ...AddProduct, price: e.target.value });
                  }}
                  type="number"
                  min="0.00"
                  max="10000.00"
                  step="0.01"
                  name="price"
                  className="w-full h-12 bg-transparent pl-5 outline-none"
                  placeholder="ราคา"
                />
              </div>
              <div className="h-12 w-full border rounded-lg mb-10">
                <input
                  value={AddProduct.stock}
                  onChange={(e) => {
                    setAddProduct({ ...AddProduct, stock: e.target.value });
                  }}
                  type="number"
                  name="stock"
                  className="w-full h-12 bg-transparent pl-5 outline-none"
                  placeholder="จำนวน"
                />
              </div>
            </div>

            <div className="p-5 h-64 w-full border rounded-lg">
              <textarea
                value={AddProduct.detail}
                onChange={(e) => {
                  setAddProduct({ ...AddProduct, detail: e.target.value });
                }}
                name="detail"
                cols="25"
                rows="9"
                className="w-full outline-none resize-none"
                placeholder="รายละเอียดสินค้า"
              ></textarea>
            </div>
            <div>
              <div>
                <input
                  type="file"
                  onChange={(e) => {
                    e.preventDefault();
                    setAddProduct({ ...AddProduct, img: e.target.value }); // for upload
                    setFieldValue(
                      "file_obj",
                      URL.createObjectURL(e.target.files[0])
                    ); // for preview image
                  }}
                  name="image"
                  click-type="type1"
                  className="absolute focus:outline-none inline-block"
                  multiple
                  accept="image/*"
                  id="files"
                />
              </div>
              <div className="flex flex-row justify-end mt-5">
                <button
                  type="submit"
                  className="bg-transparent w-30 flex flex-row items-center focus:outline-none justify-center hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
                >
                  <span className="fas fa-sign-in-alt mr-2"></span>
                  <p>บันทึก</p>
                </button>
                <button
                  type="submit"
                  className="bg-transparent ml-5 w-24 text-gray-500 font-semibold focus:outline-none py-2 px-4 border border-gray-500 rounded"
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    );
  };
  return (
    <div>
      <Formik
        initialValues={{ name: "", stock: 0, price: 0 }}
        onSubmit={(values, { setSubmitting }) => {
          let formData = new FormData();
          dispatch(AddAction.addProduct(formData, props.history));
          setSubmitting(false);
        }}
      >
        {(props) => showForm(props)}
      </Formik>
    </div>
  );
};
export default AddProduct;
