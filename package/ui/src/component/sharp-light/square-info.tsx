
import { Icon } from "../../index";

/**
 * A component that renders the `square-info` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-info?s=sharp-light square-info}
 * @preview ![square-info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-info.svg)
 */
const SquareInfo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM160 352l16 0 32 0 0-96-24 0-16 0 0-32 16 0 40 0 16 0 0 16 0 112 32 0 16 0 0 32-16 0-96 0-16 0 0-32zm88-216l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default SquareInfo;