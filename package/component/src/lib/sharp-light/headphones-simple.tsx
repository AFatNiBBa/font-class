
import { Icon } from "../../index";

/**
 * A component that renders the `headphones-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones-simple?s=sharp-light headphones-simple}
 * @preview ![headphones-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/headphones-simple.svg)
 */
const HeadphonesSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 288C32 164.3 132.3 64 256 64s224 100.3 224 224l0 112 0 16 32 0 0-16 0-112C512 146.6 397.4 32 256 32S0 146.6 0 288L0 400l0 16 32 0 0-16 0-112zm128 0l0 160-64 0 0-160 64 0zM96 256l-32 0 0 32 0 160 0 32 32 0 64 0 32 0 0-32 0-160 0-32-32 0-64 0zm256 32l64 0 0 160-64 0 0-160zm64-32l-64 0-32 0 0 32 0 160 0 32 32 0 64 0 32 0 0-32 0-160 0-32-32 0z" />
    </Icon>
);

export default HeadphonesSimple;