
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-half` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half?s=sharp-duotone-solid heart-half}
 * @preview ![heart-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/heart-half.svg)
 */
const HeartHalf: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 96l0 384L472.2 263.8c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.8L256 96z" />
        <path d="M39.8 263.8L256 480V96L231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96z" />
    </Icon>
);

export default HeartHalf;