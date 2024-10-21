
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-ceiling` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=sharp-duotone-solid light-ceiling}
 * @preview ![light-ceiling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/light-ceiling.svg)
 */
const LightCeiling: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 448c0 35.3 28.7 64 64 64s64-28.7 64-64l-128 0zM224 0l0 32 0 160 32 0 32 0 0-160 0-32L224 0z" />
        <path d="M256 192C114.6 192 0 306.6 0 448H512c0-141.4-114.6-256-256-256z" />
    </Icon>
);

export default LightCeiling;