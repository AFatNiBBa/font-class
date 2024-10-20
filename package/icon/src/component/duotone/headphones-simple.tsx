
import { Icon, generic } from "../../index";

/**
 * A component that renders the `headphones-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones-simple?s=duotone headphones-simple}
 * @preview ![headphones-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/headphones-simple.svg)
 */
const HeadphonesSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104C48 173.1 141.1 80 256 80s208 93.1 208 208l0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104C512 146.6 397.4 32 256 32S0 146.6 0 288z" />
        <path d="M144 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l16 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-16 0zm224 0l-16 0c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l16 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64z" />
    </Icon>
);

export default HeadphonesSimple;