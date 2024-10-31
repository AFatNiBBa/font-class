
import { Icon } from "../../index";

/**
 * A component that renders the `trowel-bricks` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trowel-bricks?s=sharp-regular trowel-bricks}
 * @preview ![trowel-bricks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/trowel-bricks.svg)
 */
const TrowelBricks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 152l0 104-48 0L0 128 208 0l48 0 0 104 88 0 0-24 168 0 0 96-168 0 0-24-88 0zm32 184l0-48 0-16 0-48 48 0 128 0 48 0 0 48 0 64 0 88 0 40 0 48-48 0L48 512 0 512l0-48 0-80 0-48 48 0 192 0 48 0zm48 0l128 0 0-64-128 0 0 64zm0 48l-32 0-16 0-32 0 0 80 208 0 0-40 0-40-128 0zm-128 0L48 384l0 80 160 0 0-80z" />
    </Icon>
);

export default TrowelBricks;