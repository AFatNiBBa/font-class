
import { Icon } from "../../index";

/**
 * A component that renders the `headphones-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones-simple?s=light headphones-simple}
 * @preview ![headphones-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/headphones-simple.svg)
 */
const HeadphonesSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 288C32 164.3 132.3 64 256 64s224 100.3 224 224l0 112c0 8.8 7.2 16 16 16s16-7.2 16-16l0-112C512 146.6 397.4 32 256 32S0 146.6 0 288L0 400c0 8.8 7.2 16 16 16s16-7.2 16-16l0-112zm128 0l0 160-16 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l16 0zm-16-32c-44.2 0-80 35.8-80 80l0 64c0 44.2 35.8 80 80 80l16 0c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32l-16 0zm208 32l16 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-16 0 0-160zm16-32l-16 0c-17.7 0-32 14.3-32 32l0 160c0 17.7 14.3 32 32 32l16 0c44.2 0 80-35.8 80-80l0-64c0-44.2-35.8-80-80-80z" />
    </Icon>
);

export default HeadphonesSimple;