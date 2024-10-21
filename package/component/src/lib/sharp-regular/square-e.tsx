
import { Icon } from "../../index";

/**
 * A component that renders the `square-e` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-e?s=sharp-regular square-e}
 * @preview ![square-e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-e.svg)
 */
const SquareE: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zm152 96l144 0 24 0 0 48-24 0-120 0 0 56 88 0 24 0 0 48-24 0-88 0 0 56 120 0 24 0 0 48-24 0-144 0-24 0 0-24 0-104 0-104 0-24 24 0z" />
    </Icon>
);

export default SquareE;