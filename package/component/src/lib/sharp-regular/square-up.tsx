
import { Icon } from "../../index";

/**
 * A component that renders the `square-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up?s=sharp-regular square-up}
 * @preview ![square-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-up.svg)
 */
const SquareUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM112 224l112-96 112 96 0 32-64 0 0 128-96 0 0-128-64 0 0-32z" />
    </Icon>
);

export default SquareUp;