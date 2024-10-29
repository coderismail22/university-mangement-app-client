import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import AcademicFaculty from "../pages/admin/AcademicFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AddProduct from "../pages/products(testOnly)/AddProducts";
import ViewProducts from "../pages/products(testOnly)/ViewProducts";
import EditProducts from "../pages/products(testOnly)/EditProducts";
import DeleteProducts from "../pages/products(testOnly)/DeleteProducts";
import {
  AppstoreOutlined,
  DashboardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import CreateAcademicFaculty from "../pages/admin/CreateAcademicFaculty";
import CreateAcademicDepartment from "../pages/admin/CreateAcademicDepartment";
import AcademicDepartment from "../pages/admin/AcademicDepartment";

export const adminArray = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: <DashboardOutlined />,
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create Academic Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create Academic Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create Academic Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "User Management",
    icon: <UserOutlined />,
    children: [
      {
        name: "Create Admin",
        icon: <DashboardOutlined />,
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Member",
        path: "create-member",
        element: <CreateStudent />,
      },
    ],
  },
  {
    name: "Inventory Management", // New Section
    icon: <AppstoreOutlined />,
    children: [
      {
        name: "Add Product",
        path: "add-product",
        element: <AddProduct />, // Component to add a new product
      },
      {
        name: "View Products",
        path: "view-products",
        element: <ViewProducts />, // Component to list all products
      },
      {
        name: "Edit Product",
        path: "edit-product/:id", // Dynamic path to edit a specific product
        element: <EditProducts />, // Component to edit an existing product
      },
      {
        name: "Delete Product",
        path: "delete-product/:id", // Dynamic path to delete a specific product
        element: <DeleteProducts />, // Component to delete a product
      },
    ],
  },
];
