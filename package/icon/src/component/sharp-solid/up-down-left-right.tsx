
import { Icon } from "../../index";

/**
 * A component that renders the `up-down-left-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down-left-right?s=sharp-solid up-down-left-right}
 * @preview ![up-down-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/up-down-left-right.svg)
 */
const UpDownLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 96L256 0l96 96 0 32-64 0 0 96 96 0 0-64 32 0 96 96-96 96-32 0 0-64-96 0 0 96 64 0 0 32-96 96-96-96 0-32 64 0 0-96-96 0 0 64-32 0L0 256l96-96 32 0 0 64 96 0 0-96-64 0 0-32z" />
    </Icon>
);

export default UpDownLeftRight;