import { View, Text, OpenData } from "@tarojs/components";
import { useReady } from "@tarojs/taro";
import { useSelector } from "react-redux";
import { rootState } from "@/models/type";
import "./index.scss";

const Index = () => {
  const text = useSelector<rootState, string>(state => state.global.text);
  useReady(() => { });

  return (
    <View className="index">
      <OpenData type="userAvatarUrl" className="avatar" />
      <Text>{text}</Text>
    </View>
  );
};

export default Index;
