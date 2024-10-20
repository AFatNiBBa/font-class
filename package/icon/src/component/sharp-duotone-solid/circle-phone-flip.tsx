
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-phone-flip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-flip?s=sharp-duotone-solid circle-phone-flip}
 * @preview ![circle-phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-phone-flip.svg)
 */
const CirclePhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 56l72-40 33.5 41.9c34.2-18.1 62.3-46.2 80.4-80.4L272 200l40-72 72 16 0 16c0 123.7-100.3 224-224 224l-16 0-16-72z" />
        <path d="M384 144l-72-16-40 72 41.9 33.5c-18.1 34.2-46.2 62.3-80.4 80.4L200 272l-72 40 16 72h16c123.7 0 224-100.3 224-224l0-16z" />
    </Icon>
);

export default CirclePhoneFlip;