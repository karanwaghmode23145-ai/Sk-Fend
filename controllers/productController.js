import Product from "../models/Product.js";

const createSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[\s]+/g, "-")
    .replace(/[^\w-]+/g, "");
};

/* ---------------------- CREATE PRODUCT ---------------------- */
/* ---------------------- CREATE PRODUCT ---------------------- */

export const createProduct = async (req, res) => {
  
};

/* ---------------------- GET ALL PRODUCTS ---------------------- */
/* ---------------------- GET ALL PRODUCTS ---------------------- */

export const getProducts = async (req, res) => {
  
};

/* ---------------------- GET SINGLE PRODUCT ---------------------- */
/* ---------------------- GET SINGLE PRODUCT ---------------------- */

export const getProductById = async (req, res) => {
 
};
/* ---------------------- UPDATE PRODUCT ---------------------- */
/* ---------------------- UPDATE PRODUCT ---------------------- */

export const updateProduct = async (req, res) => {
  
};

/* ---------------------- DELETE PRODUCT ---------------------- */
/* ---------------------- DELETE PRODUCT ---------------------- */

export const deleteProduct = async (req, res) => {
 
};