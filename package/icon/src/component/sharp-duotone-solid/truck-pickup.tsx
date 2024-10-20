
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-pickup` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-pickup?s=sharp-duotone-solid truck-pickup}
 * @preview ![truck-pickup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-pickup.svg)
 */
const TruckPickup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M80 400a80 80 0 1 0 160 0A80 80 0 1 0 80 400zm320 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M224 32l32 0 128 0 15.4 0L409 44 527.4 192l80.6 0 0 96 32 0 0 64-32 0-26.8 0c-18-37.8-56.5-64-101.2-64s-83.2 26.2-101.2 64l-117.6 0c-18-37.8-56.5-64-101.2-64s-83.2 26.2-101.2 64L32 352 0 352l0-64 32 0 0-96 192 0 0-128 0-32zM368.6 96L288 96l0 96 157.4 0L368.6 96z" />
    </Icon>
);

export default TruckPickup;