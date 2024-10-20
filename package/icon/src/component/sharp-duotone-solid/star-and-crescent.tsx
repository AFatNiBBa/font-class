
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-and-crescent` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-and-crescent?s=sharp-duotone-solid star-and-crescent}
 * @preview ![star-and-crescent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/star-and-crescent.svg)
 */
const StarAndCrescent: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M247 219.5l68.5 66.7-16.2 94.2L384 336l84.6 44.5-16.2-94.2L521 219.5l-94.6-13.8L384 120l-42.3 85.8L247 219.5z" />
        <path d="M446.6 85.1C413 61.7 372.1 48 328 48c-114.9 0-208 93.1-208 208s93.1 208 208 208c44.1 0 85-13.7 118.6-37.1C399.8 479.1 331.7 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0c75.7 0 143.8 32.9 190.6 85.1z" />
    </Icon>
);

export default StarAndCrescent;