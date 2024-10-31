
import { Icon } from "../../index";

/**
 * A component that renders the `house-laptop` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-laptop?s=sharp-solid house-laptop}
 * @preview ![house-laptop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-laptop.svg)
 */
const HouseLaptop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 208L240 0 480 208l0 16-192 0 0-32-96 0 0 96 80 0 0 128L64 416l0-160L0 256l0-48zm544 96l-192 0 0 144 192 0 0-144zm-240 0l0-48 48 0 192 0 48 0 0 48 0 144 48 0 0 32-32 32-16 0-48 0-192 0-48 0-16 0-32-32 0-32 48 0 0-144z" />
    </Icon>
);

export default HouseLaptop;