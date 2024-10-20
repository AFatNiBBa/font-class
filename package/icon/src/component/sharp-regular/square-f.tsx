
import { Icon } from "../../index";

/**
 * A component that renders the `square-f` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-f?s=sharp-regular square-f}
 * @preview ![square-f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-f.svg)
 */
const SquareF: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zm152 96l144 0 24 0 0 48-24 0-120 0 0 64 88 0 24 0 0 48-24 0-88 0 0 72 0 24-48 0 0-24 0-96 0-112 0-24 24 0z" />
    </Icon>
);

export default SquareF;