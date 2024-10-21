
import { Icon } from "../../index";

/**
 * A component that renders the `square-this-way-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-this-way-up?s=sharp-regular square-this-way-up}
 * @preview ![square-this-way-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-this-way-up.svg)
 */
const SquareThisWayUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM352 352l0 48L96 400l0-48 256 0zm-72-32l0-128-40 0 0-16 64-64 64 64 0 16-40 0 0 128-48 0zM120 192l-40 0 0-16 64-64 64 64 0 16-40 0 0 128-48 0 0-128z" />
    </Icon>
);

export default SquareThisWayUp;