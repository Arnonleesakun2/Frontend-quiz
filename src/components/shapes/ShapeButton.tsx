import style from "../../app/moveshape/moveshape.module.scss";

type ShapeButtonProps = {
  type: string;
  onClick: () => void;
};

const ShapeButton = ({ type,onClick }: ShapeButtonProps) => {
  return (
    <button onClick={onClick}>
      <div className={style[type]} />
    </button>
  );
};

export default ShapeButton;
