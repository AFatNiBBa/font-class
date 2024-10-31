
import { Icon } from "../../index";

/**
 * A component that renders the `headphones-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones-simple?s=sharp-regular headphones-simple}
 * @preview ![headphones-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/headphones-simple.svg)
 */
const HeadphonesSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 80C141.1 80 48 173.1 48 288l0 104 0 24L0 416l0-24L0 288C0 146.6 114.6 32 256 32s256 114.6 256 256l0 104 0 24-48 0 0-24 0-104c0-114.9-93.1-208-208-208zM160 320l-32 0 0 112 32 0 0-112zm-32-48l32 0 48 0 0 48 0 112 0 48-48 0-32 0-48 0 0-48 0-112 0-48 48 0zm256 48l-32 0 0 112 32 0 0-112zm48-48l0 48 0 112 0 48-48 0-32 0-48 0 0-48 0-112 0-48 48 0 32 0 48 0z" />
    </Icon>
);

export default HeadphonesSimple;