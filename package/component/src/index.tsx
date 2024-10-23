
import anim from "./style/anim.module.scss";
import generic from "./style/generic.module.scss";
import internal from "./style/internal.module.scss";

import { ComponentProps, createSignal, onCleanup, ParentProps, splitProps } from "solid-js";

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
            fill="currentColor"
            {...other}
        />
    </>
}

/**
 * Component that allows you to align an {@link Icon} with the surrounding text.
 * It displays 2 spans:
 * - The first one is used to measure the height of the text
 * - The second one is used to align the content with the text (Which would change its height, so it's forced to be the same height as the first one)
 */
export function Text(props: ParentProps) {
	const [ height, setHeight ] = createSignal(0);
	const obs = new ResizeObserver(([ x ]) => setHeight(x.target.getBoundingClientRect().height)); // I can't use the sizes inside of `x` because they are unset for inline elements
	onCleanup(() => obs.disconnect());
	return <>
		<span ref={x => obs.observe(x)} />
		<span class={internal.text} style={{ height: `${height()}px` }}>
			{props.children}
		</span>
	</>
}