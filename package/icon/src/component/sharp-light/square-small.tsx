
import { Icon } from "../../index";

/**
 * A component that renders the `square-small` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-small?s=sharp-light square-small}
 * @preview ![square-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-small.svg)
 */
const SquareSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M288 128l0 256L32 384l0-256 256 0zM32 96L0 96l0 32L0 384l0 32 32 0 256 0 32 0 0-32 0-256 0-32-32 0L32 96z" />
    </Icon>
);

export default SquareSmall;