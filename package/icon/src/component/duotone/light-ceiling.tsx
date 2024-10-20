
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-ceiling` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=duotone light-ceiling}
 * @preview ![light-ceiling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/light-ceiling.svg)
 */
const LightCeiling: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 448c0 35.3 28.7 64 64 64s64-28.7 64-64l-128 0zM224 32l0 160 32 0 32 0 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M256 192C125.4 192 17.7 289.8 2 416.1C-.2 433.6 14.3 448 32 448H480c17.7 0 32.2-14.4 30-31.9C494.3 289.8 386.6 192 256 192z" />
    </Icon>
);

export default LightCeiling;