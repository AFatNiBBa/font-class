
import { Icon } from "../../index";

/**
 * A component that renders the `square-r` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-r?s=sharp-light square-r}
 * @preview ![square-r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-r.svg)
 */
const SquareR: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm128 96l16 0 96 0c44.2 0 80 35.8 80 80l0 16-1.6 0c-5.7 28-25.9 50.6-52.5 59.7L327.2 384l-37.5 0L231 288l-7 0-64 0 0 80 0 16-32 0 0-16 0-96 0-128 0-16zm32 128l64 0 16 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-80 0 0 96z" />
    </Icon>
);

export default SquareR;