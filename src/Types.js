/*
 *
 * Created by Stone
 * https://github.com/bolan9999
 * Email: shanshang130@gmail.com
 * Date: 2018/7/17
 *
 */

import {Animated, ViewProps, ViewStyle} from "react-native";
import {RefreshHeader} from "./RefreshHeader";
import {LoadingFooter} from "./LoadingFooter";

export interface IndexPath {
  section: number,
  row: number
}

export interface Offset {
  x: number,
  y: number
}

export interface NativeContentOffset {
  x?: Animated.Value,
  y?: Animated.Value
}

export type RefreshStyle = "topping" | "stickyScrollView" | "stickyContent";

export type LoadingStyle = "bottoming" | "stickyScrollView" | "stickyContent";

export interface SpringScrollViewPropType extends ViewProps {
  style?: ViewStyle,
  contentStyle?: ViewStyle,
  bounces?: boolean,
  scrollEnabled?: boolean,
  initialContentOffset?: Offset,
  showsVerticalScrollIndicator?: boolean,
  showsHorizontalScrollIndicator?: boolean,
  refreshHeader?: RefreshHeader,
  loadingFooter?: LoadingFooter,
  onRefresh?: () => any,
  onLoading?: () => any,
  textInputRefs?: any[],
  inputToolBarHeight?: number,
  tapToHideKeyboard?: boolean,
  onTouchBegin?: () => any,
  onTouchEnd?: () => any,
  onMomentumScrollBegin?: () => any,
  onMomentumScrollEnd?: () => any,
  onNativeContentOffsetExtract?: NativeContentOffset,
}
