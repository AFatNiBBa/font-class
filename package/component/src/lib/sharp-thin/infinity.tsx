
import { Icon } from "../../index";

/**
 * A component that renders the `infinity` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/infinity?s=sharp-thin infinity}
 * @preview ![infinity](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/infinity.svg)
 */
const Infinity: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 112l179.2 0L320 245 460.8 112 640 112l0 288-179.2 0L320 267 179.2 400 0 400 0 112zM308.3 256L172.8 128 16 128l0 256 156.8 0L308.3 256zm23.3 0L467.2 384 624 384l0-256-156.8 0L331.7 256z" />
    </Icon>
);

export default Infinity;