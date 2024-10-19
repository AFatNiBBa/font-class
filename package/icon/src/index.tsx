
import anim from "./style/anim.module.scss";
import generic from "./style/generic.module.scss";

import { ComponentProps, splitProps } from "solid-js";

export * from "./custom";
export { anim, generic };

/** The default size for an icon */
export const DEFAULT_ICON_SIZE = "1em";

/** The base icon component */
export function Icon(props: { size?: string | number } & ComponentProps<"svg">) {
    const [ mine, other ] = splitProps(props, [ "width", "height", "size" ]);
    return <>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={mine.width ?? mine.size ?? DEFAULT_ICON_SIZE}
            height={mine.height ?? mine.size ?? DEFAULT_ICON_SIZE}
            viewBox="0 0 512 512"
            {...other}
        />
    </>
}