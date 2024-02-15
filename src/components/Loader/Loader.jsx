import { Vortex } from "react-loader-spinner";
import css from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={css.modal}>
      <Vortex
        visible={true}
        height="300"
        width="300"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
};
