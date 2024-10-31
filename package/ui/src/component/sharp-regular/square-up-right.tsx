
import { Icon } from "../../index";

/**
 * A component that renders the `square-up-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-right?s=sharp-regular square-up-right}
 * @preview ![square-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-up-right.svg)
 */
const SquareUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 352L48 432 48 80l352 0zm48-48l-48 0L48 32 0 32 0 80 0 432l0 48 48 0 352 0 48 0 0-48 0-352 0-48zM320 320l0-160-160 0-24 24 52 52-76 76 56 56 76-76 52 52 24-24z" />
    </Icon>
);

export default SquareUpRight;