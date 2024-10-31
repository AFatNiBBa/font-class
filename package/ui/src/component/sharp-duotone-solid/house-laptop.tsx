
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-laptop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-laptop?s=sharp-duotone-solid house-laptop}
 * @preview ![house-laptop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-laptop.svg)
 */
const HouseLaptop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 208l0 48 64 0 0 160 208 0 0-128-80 0 0-96 96 0 0 32 192 0 0-16L240 0 0 208z" />
        <path d="M352 304l0 144 192 0 0-144-192 0zM304 448l0-144 0-48 48 0 192 0 48 0 0 48 0 144 48 0 0 32-32 32-16 0-48 0-192 0-48 0-16 0-32-32 0-32 48 0z" />
    </Icon>
);

export default HouseLaptop;