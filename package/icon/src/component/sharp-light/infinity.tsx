
import { Icon } from "../../index";

/**
 * A component that renders the `infinity` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/infinity?s=sharp-light infinity}
 * @preview ![infinity](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/infinity.svg)
 */
const Infinity: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 96l199.2 0L320 231.9 440.8 96 640 96l0 320-199.2 0L320 280.1 199.2 416 0 416 0 96zM298.6 256L184.8 128 32 128l0 256 152.8 0L298.6 256zm42.8 0L455.2 384 608 384l0-256-152.8 0L341.4 256z" />
    </Icon>
);

export default Infinity;