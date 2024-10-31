
import { Icon } from "../../index";

/**
 * A component that renders the `trowel-bricks` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trowel-bricks?s=sharp-solid trowel-bricks}
 * @preview ![trowel-bricks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/trowel-bricks.svg)
 */
const TrowelBricks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 152l0 104-48 0L0 128 208 0l48 0 0 104 88 0 0-24 168 0 0 96-168 0 0-24-88 0zm32 72l224 0 0 128-224 0 0-128zM160 384l0 128L0 512 0 384l160 0zm352 0l0 128-320 0 0-128 320 0z" />
    </Icon>
);

export default TrowelBricks;