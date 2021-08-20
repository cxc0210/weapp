import React from "react";
import { View, OpenData } from "@tarojs/components";
import { useReady } from "@tarojs/taro";
import "./index.scss";

const Index = () => {
  useReady(() => {});

  return (
    <View className="index">
      <OpenData type="userAvatarUrl" className="avatar" />
    </View>
  );
};

export default Index;
