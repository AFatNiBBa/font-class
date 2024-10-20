
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trowel-bricks` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trowel-bricks?s=sharp-duotone-solid trowel-bricks}
 * @preview ![trowel-bricks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trowel-bricks.svg)
 */
const TrowelBricks: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384l160 0 0 128L0 512 0 384zm192 0l320 0 0 128-320 0 0-128zm96-160l224 0 0 128-224 0 0-128z" />
        <path d="M256 256l0-104 88 0 0 24 168 0 0-96L344 80l0 24-88 0L256 0 208 0 0 128 208 256l48 0z" />
    </Icon>
);

export default TrowelBricks;