
import { Icon } from "../../index";

/**
 * A component that renders the `square-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down?s=sharp-regular square-down}
 * @preview ![square-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-down.svg)
 */
const SquareDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80L48 80l0 352 352 0 0-352zm48 400l-48 0L48 480 0 480l0-48L0 80 0 32l48 0 352 0 48 0 0 48 0 352 0 48zM336 288L224 384 112 288l0-32 64 0 0-128 96 0 0 128 64 0 0 32z" />
    </Icon>
);

export default SquareDown;