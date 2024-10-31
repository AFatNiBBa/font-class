
import { Icon } from "../../index";

/**
 * A component that renders the `square-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-right?s=sharp-regular square-right}
 * @preview ![square-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-right.svg)
 */
const SquareRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80L48 80l0 352 352 0 0-352zm48-48l0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 352 0 48 0zM256 144l96 112L256 368l-32 0 0-64L96 304l0-96 128 0 0-64 32 0z" />
    </Icon>
);

export default SquareRight;