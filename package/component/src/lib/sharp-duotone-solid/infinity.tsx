
import { Icon, generic } from "../../index";

/**
 * A component that renders the `infinity` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/infinity?s=sharp-duotone-solid infinity}
 * @preview ![infinity](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/infinity.svg)
 */
const Infinity: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96l205.3 0L320 210.7 434.7 96 640 96l0 320-205.3 0L320 301.3 205.3 416 0 416 0 96zM274.7 256l-96-96L64 160l0 192 114.7 0 96-96zm90.5 0l96 96L576 352l0-192-114.7 0-96 96z" />
    </Icon>
);

export default Infinity;