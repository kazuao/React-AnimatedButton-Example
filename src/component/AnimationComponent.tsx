import React, { useState } from "react";
import {
  AnimationControls,
  Target,
  TargetAndTransition,
  VariantLabels,
  motion,
} from "framer-motion";
import mic from "../assets/Apple.png";

interface AnimationModel {
  id: number;
  initial: boolean | Target | VariantLabels | undefined;
  animate: AnimationControls | TargetAndTransition | VariantLabels | boolean;
  duration: number;
}

const AnimationComponent = () => {
  const models: AnimationModel[] = [
    {
      id: 0,
      initial: { scale: 1, translateY: "0px" },
      animate: { scale: 1.1, translateY: "-20px" },
      duration: 0.2,
    },
    {
      id: 1,
      initial: { scale: 1.1, translateY: "-20px", rotate: 0 },
      animate: { scale: 1.1, translateY: "-20px", rotate: 8 },
      duration: 0.3,
    },
    {
      id: 2,
      initial: { scale: 1.1, translateY: "-20px", rotate: 8 },
      animate: { scale: 1.1, translateY: "-20px", rotate: -8 },
      duration: 0.3,
    },
    {
      id: 3,
      initial: { scale: 1.1, translateY: "-20px", rotate: -8 },
      animate: { scale: 1.1, translateY: "-20px", rotate: 0 },
      duration: 0.3,
    },
    {
      id: 4,
      initial: { scale: 1.1, translateY: "-20px" },
      animate: { scale: 1, translateY: "0px" },
      duration: 0.2,
    },
    {
      id: 5,
      initial: { scale: 1, translateY: "0px" },
      animate: { scale: 1, translateY: "0px" },
      duration: 0.5,
    },
  ];

  const [model, setModel] = useState<AnimationModel>(models[0]);

  const handleAnimationComplete = () => {
    // アニメーションの終了時に呼ばれるコールバック
    // 次のアニメーションを開始するために状態を更新
    if (model.id < 5) {
      const m = models[model.id + 1];
      setModel(m);
    } else {
      setModel(models[0]);
    }
  };

  return (
    <div>
      <motion.img
        src={mic}
        alt="hoge"
        style={{ width: "100px", height: "100px" }}
        key={model.id} // キーを変更してアニメーションをリセット
        initial={model.initial}
        animate={model.animate}
        transition={{ duration: model.duration, ease: "easeOut" }}
        onAnimationComplete={handleAnimationComplete} // アニメーションの終了時にコールバックを呼び出す
      />
    </div>
  );
};

export default AnimationComponent;
