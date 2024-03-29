import { ComponentPropsWithoutRef } from "react";
import { Spinner } from "ui/Spinner/Spinner";
import { clsnm } from "utils/clsnm";
import { useTheme } from "hooks/useTheme";
import styles from "./Button.module.scss";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  color?:
    | "blue"
    | "neutral"
    | "pink"
    | "ghost"
    | "red"
    | "gray"
    | "black"
    | "white"
    | "transparentWhite"
    | "akbank"
    | "member"
    | "transparentBlack"
    | "landing";
  textPosition?: "center" | "left" | "right";
  height?: string;
  width?: string;
  fullwidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  fontSize?: "fs12" | "fs14" | "fs16" | "fs18" | "fs20" | "fs22";
  fontWeight?: "fw400" | "fw500" | "fw600" | "fw700";
  lineHeight?: "lhNormal" | "lh22";
}

const Button = ({
  className,
  children,
  color = "blue",
  textPosition = "center",
  height,
  width,
  fullwidth,
  disabled,
  style = {},
  loading,
  fontSize = "fs14",
  fontWeight = "fw500",
  lineHeight = "lh22",
  ...props
}: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <button
      style={{ height: height, width: width ? width : undefined, ...style }}
      className={clsnm(
        styles.wrapper,
        styles[color],
        styles[textPosition],
        styles[theme],
        disabled && styles.disabled,
        loading && styles.loading,
        className
      )}
      {...props}
    >
      {loading && (
        <div className={styles.loader}>
          <Spinner />
        </div>
      )}
      <span
        className={clsnm(
          styles.text,
          styles[color],
          styles[textPosition],
          styles[fontSize],
          styles[fontWeight],
          styles[lineHeight],
          fullwidth && styles["fullwidth"],
          loading && styles.loading
        )}
      >
        {children}
      </span>
    </button>
  );
};

export { Button };
