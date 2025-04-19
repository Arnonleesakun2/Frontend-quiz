"use client";

import style from "./moveshape.module.scss";
import Header from "@/components/header/Header";
import ShapeButton from "@/components/shapes/ShapeButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  moveShape,
  switchPosition,
  randomShapes,
  shapeComponents,
  ShapeType,
} from "@/utils/shape";

const Page = () => {
  const { t } = useTranslation("layout");
  const [shapes, setShapes] = useState<ShapeType[]>(shapeComponents);
  const handleMoveShape = (direction: "left" | "right") => {
    setShapes((currentShapes) => moveShape(currentShapes, direction));
  };
  const handleSwitchPosition = () => {
    setShapes((currentShapes) => switchPosition(currentShapes));
  };
  const handleRandomShapes = () => {
    setShapes((currentShapes) => randomShapes(currentShapes));
  };
  return (
    <section>
      <Header title={t("title")} label={t("home")} href="/" />
      <div className={style.moveshapecontainer}>
        <button onClick={() => handleMoveShape("left")}>
          <div className={style.triangleleft} />
          <div className={style.bubble}>{t("moveShape")}</div>
        </button>
        <button onClick={handleSwitchPosition} className={style.moveposition}>
          <div className={style.triangleup} />
          <div className={style.triangledown} />
          <div className={style.bubble}>{t("movePosition")}</div>
        </button>
        <button onClick={() => handleMoveShape("right")}>
          <div className={style.triangleright} />
          <div className={style.bubble}>{t("moveShape")}</div>
        </button>
      </div>
      <div className={style.shapescontainer}>
        <div className={style.row1}>
          {shapes.slice(0, 3).map((shape, index) => (
            <ShapeButton
              key={index}
              type={shape}
              onClick={handleRandomShapes}
            />
          ))}
        </div>
        <div className={style.row2}>
          {shapes.slice(3).map((shape, index) => (
            <ShapeButton
              key={index}
              type={shape}
              onClick={handleRandomShapes}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
