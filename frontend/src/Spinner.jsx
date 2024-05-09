import { RotatingTriangles } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="rotating-triangles-loading"
        wrapperStyle={{}}
      />
    </div>
  );
}
