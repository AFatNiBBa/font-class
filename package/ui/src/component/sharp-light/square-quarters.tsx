
import { Icon } from "../../index";

/**
 * A component that renders the `square-quarters` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quarters?s=sharp-light square-quarters}
 * @preview ![square-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-quarters.svg)
 */
const SquareQuarters: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M393.4 64L54.6 64 224 233.4 393.4 64zM32 86.6l0 338.7L201.4 256 32 86.6zM54.6 448l338.7 0L224 278.6 54.6 448zM416 425.4l0-338.7L246.6 256 416 425.4zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default SquareQuarters;