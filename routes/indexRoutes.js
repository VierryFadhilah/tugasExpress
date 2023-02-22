import { Router } from "express";
import custController from "../controller/custController";
import userController from "../controller/userController";
import orderController from "../controller/orderController";
import productCategoryController from "../controller/productCategoryController";
import productController from "../controller/productController";
import orderDetailController from "../controller/orderDetailController";

const router = new Router();

router.get("/user", userController.findAllRows);
router.get("/user/:id", userController.findAllRowsById);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

router.get("/user/:username/:password", userController.findUser);
router.get("/customer", custController.findCustomerDetailOrder);
router.get("/customerDetail", custController.findAllCustomerOrderDetail);

router.post("/order", orderController.createOrder);
router.post("/productCategory", productCategoryController.createCategory);
router.post("/orderDetail", orderDetailController.createOrderDetail);
router.get("/productCategory", productCategoryController.findAllCategory);
router.get("/productPerCategory", productController.findProductPerCategory);
router.get("/findproductPerCategory", productController.productPerCategory);
router.get("/orderDetail", orderDetailController.findAllOrderCustomer);
router.get("/customerorderdetail", userController.findCustomerOrderDetail);
router.get("/customeraccount", userController.findCustomerAccount);

router.post("/product", productController.createProduct);

export default router;
