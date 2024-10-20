
import { Icon } from "../../index";

/**
 * A component that renders the `square-z` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-z?s=sharp-light square-z}
 * @preview ![square-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-z.svg)
 */
const SquareZ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm304 96l16 0 0 21.1-3 4.2L175.1 352 304 352l16 0 0 32-16 0-160 0-16 0 0-21.1 3-4.2L272.9 160 144 160l-16 0 0-32 16 0 160 0z" />
    </Icon>
);

export default SquareZ;