import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log("all semester data", data);
  return <div>AcademicSemester</div>;
};

export default AcademicSemester;
