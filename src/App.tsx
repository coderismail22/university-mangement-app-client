import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";
const App = () => {
  return (
    <div style={{ height: "200vh" }}>
      <ProtectedRoute>
        <div style={{height:"200vh"}}>
          <MainLayout />
        </div>
      </ProtectedRoute>
    </div>
  );
};

export default App;
