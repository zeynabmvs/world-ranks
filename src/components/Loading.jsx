import { ThreeDots } from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex justify-center items-center pt-20 w-full">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4E80EE"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loading;
