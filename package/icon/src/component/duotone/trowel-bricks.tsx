
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trowel-bricks` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trowel-bricks?s=duotone trowel-bricks}
 * @preview ![trowel-bricks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/trowel-bricks.svg)
 */
const TrowelBricks: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-64zm192 0c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-64zm96-160c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64z" />
        <path d="M256 32c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-192 96C6.8 104.8 0 115.9 0 128s6.8 23.2 17.7 28.6l192 96c9.9 5 21.7 4.4 31.1-1.4s15.2-16.1 15.2-27.2l0-72 89 0c3.6 13.8 16.1 24 31 24l88 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-88 0c-14.9 0-27.4 10.2-31 24l-89 0 0-72z" />
    </Icon>
);

export default TrowelBricks;