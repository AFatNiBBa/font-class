
import { Icon } from "../../index";

/**
 * A component that renders the `square-nfi` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-nfi?s=sharp-light square-nfi}
 * @preview ![square-nfi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-nfi.svg)
 */
const SquareNfi: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM80 160l8 0 9.9 0 4.4 8.8L160 284.2 160 176l0-16 32 0 0 16 0 160 0 16-16 0-8 0-9.9 0-4.4-8.8L96 227.8 96 336l0 16-32 0 0-16 0-160 0-16 16 0zm160 0l64 0 16 0 0 32-16 0-48 0 0 32 48 0 16 0 0 32-16 0-48 0 0 80 0 16-32 0 0-16 0-96 0-64 0-16 16 0zm144 16l0 160 0 16-32 0 0-16 0-160 0-16 32 0 0 16z" />
    </Icon>
);

export default SquareNfi;