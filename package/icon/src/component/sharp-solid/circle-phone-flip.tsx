
import { Icon } from "../../index";

/**
 * A component that renders the `circle-phone-flip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-flip?s=sharp-solid circle-phone-flip}
 * @preview ![circle-phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-phone-flip.svg)
 */
const CirclePhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm56 128l-40 72 41.9 33.5c-18.1 34.2-46.2 62.3-80.4 80.4L200 272l-72 40 16 72 16 0c123.7 0 224-100.3 224-224l0-16-72-16z" />
    </Icon>
);

export default CirclePhoneFlip;