
import { Icon } from "../../index";

/**
 * A component that renders the `square-nfi` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-nfi?s=sharp-thin square-nfi}
 * @preview ![square-nfi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-nfi.svg)
 */
const SquareNfi: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 416L16 464 16 48l416 0zM16 32L0 32 0 48 0 464l0 16 16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32zM64 160l0 8 0 176 0 8 16 0 0-8 0-156.7 72.7 160 2.1 4.7 5.2 0 8 0 8 0 0-8 0-176 0-8-16 0 0 8 0 156.7-72.7-160L85.2 160 80 160l-8 0-8 0zm168 0l0 8 0 64 0 112 0 8 16 0 0-8 0-104 64 0 8 0 0-16-8 0-64 0 0-48 64 0 8 0 0-16-8 0-72 0-8 0zm152 8l0-8-16 0 0 8 0 176 0 8 16 0 0-8 0-176z" />
    </Icon>
);

export default SquareNfi;