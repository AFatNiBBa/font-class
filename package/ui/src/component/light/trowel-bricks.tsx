
import { Icon } from "../../index";

/**
 * A component that renders the `trowel-bricks` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trowel-bricks?s=light trowel-bricks}
 * @preview ![trowel-bricks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/trowel-bricks.svg)
 */
const TrowelBricks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 128L224 32l0 192L32 128zM256 32c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-192 96C6.8 104.8 0 115.9 0 128s6.8 23.2 17.7 28.6l192 96c9.9 5 21.7 4.4 31.1-1.4s15.2-16.1 15.2-27.2l0-80 88 0c0 17.7 14.3 32 32 32l88 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-88 0c-17.7 0-32 14.3-32 32l-88 0 0-80zm208 80c8.8 0 16 7.2 16 16s-7.2 16-16 16l-88 0 0-32 88 0zM288 384l16 0 16 0 160 0 0 8 0 88-224 0 0-96 32 0zm-64 0l0 96L32 480l0-96 192 0zm256-32l-160 0 0-96 160 0 0 96zM288 256l0 64 0 32-32 0L32 352c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-88 0-8 0-128c0-17.7-14.3-32-32-32l-160 0c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default TrowelBricks;