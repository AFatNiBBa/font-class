
import { Icon } from "../../index";

/**
 * A component that renders the `square-code` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-code?s=sharp-light square-code}
 * @preview ![square-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-code.svg)
 */
const SquareCode: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 384L32 448 32 64l384 0zM32 32L0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32zM249.4 182.7l10.6 12L314.6 256 260 317.4l-10.6 12 23.9 21.3 10.6-12 64-72 9.4-10.6L348 245.4l-64-72-10.6-12-23.9 21.3zm-61.5 12l10.6-12-23.9-21.3-10.6 12-64 72L90.6 256l9.4 10.6 64 72 10.6 12 23.9-21.3-10.6-12L133.4 256 188 194.6z" />
    </Icon>
);

export default SquareCode;