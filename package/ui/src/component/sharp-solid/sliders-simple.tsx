
import { Icon } from "../../index";

/**
 * A component that renders the `sliders-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sliders-simple?s=sharp-solid sliders-simple}
 * @preview ![sliders-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sliders-simple.svg)
 */
const SlidersSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 384l64 0 0-64-64 0 0 64zm128 0l0 64-64 0-64 0L0 448l0-64 0-64 0-64 64 0 64 0 64 0 0 64 288 0 32 0 0 64-32 0-288 0zM32 192L0 192l0-64 32 0 288 0 0-64 64 0 64 0 64 0 0 64 0 64 0 64-64 0-64 0-64 0 0-64L32 192zm416 0l0-64-64 0 0 64 64 0z" />
    </Icon>
);

export default SlidersSimple;