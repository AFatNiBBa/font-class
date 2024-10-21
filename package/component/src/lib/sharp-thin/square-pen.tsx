
import { Icon } from "../../index";

/**
 * A component that renders the `square-pen` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-pen?s=sharp-thin square-pen}
 * @preview ![square-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-pen.svg)
 */
const SquarePen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm295.3 79.9l11.3 11.3 50.2 50.2 11.3 11.3L356.8 196 182.3 370.6l-69.7 10.9L96 384l2.6-16.6 10.9-69.7L295.3 111.9zM124.4 305.4l-9.3 59.5 59.5-9.3L304.4 225.8l-50.2-50.2L124.4 305.4zM345.5 184.7l-50.2-50.2-29.8 29.8 50.2 50.2 29.8-29.8z" />
    </Icon>
);

export default SquarePen;