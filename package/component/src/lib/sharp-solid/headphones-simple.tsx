
import { Icon } from "../../index";

/**
 * A component that renders the `headphones-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones-simple?s=sharp-solid headphones-simple}
 * @preview ![headphones-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/headphones-simple.svg)
 */
const HeadphonesSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 80C141.1 80 48 173.1 48 288l0 104 0 24L0 416l0-24L0 288C0 146.6 114.6 32 256 32s256 114.6 256 256l0 104 0 24-48 0 0-24 0-104c0-114.9-93.1-208-208-208zM80 288l112 0 0 192L80 480l0-192zm240 0l112 0 0 192-112 0 0-192z" />
    </Icon>
);

export default HeadphonesSimple;