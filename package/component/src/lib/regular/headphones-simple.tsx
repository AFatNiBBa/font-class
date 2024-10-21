
import { Icon } from "../../index";

/**
 * A component that renders the `headphones-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones-simple?s=regular headphones-simple}
 * @preview ![headphones-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/headphones-simple.svg)
 */
const HeadphonesSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 80C141.1 80 48 173.1 48 288l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 288C0 146.6 114.6 32 256 32s256 114.6 256 256l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-114.9-93.1-208-208-208zM160 432l0-112c-17.7 0-32 14.3-32 32l0 48c0 17.7 14.3 32 32 32zm0-160l16 0c17.7 0 32 14.3 32 32l0 144c0 17.7-14.3 32-32 32l-16 0c-44.2 0-80-35.8-80-80l0-48c0-44.2 35.8-80 80-80zm192 48l0 112c17.7 0 32-14.3 32-32l0-48c0-17.7-14.3-32-32-32zm80 32l0 48c0 44.2-35.8 80-80 80l-16 0c-17.7 0-32-14.3-32-32l0-144c0-17.7 14.3-32 32-32l16 0c44.2 0 80 35.8 80 80z" />
    </Icon>
);

export default HeadphonesSimple;