
import { Icon } from "../../index";

/**
 * A component that renders the `up-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down?s=sharp-light up-down}
 * @preview ![up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/up-down.svg)
 */
const UpDown: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M224 352l-32 0 0-32 0-128 0-32 32 0 32 0 0-32L150.6 22.6 128 0 105.4 22.6 0 128l0 32 32 0 32 0 0 32 0 128 0 32-32 0L0 352l0 32L105.4 489.4 128 512l22.6-22.6L256 384l0-32-32 0zm-13.3 32L128 466.7 45.3 384 64 384l32 0 0-32 0-192 0-32-32 0-18.7 0L128 45.3 210.7 128 192 128l-32 0 0 32 0 192 0 32 32 0 18.7 0z" />
    </Icon>
);

export default UpDown;