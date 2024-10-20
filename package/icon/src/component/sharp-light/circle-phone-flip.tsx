
import { Icon } from "../../index";

/**
 * A component that renders the `circle-phone-flip` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-flip?s=sharp-light circle-phone-flip}
 * @preview ![circle-phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-phone-flip.svg)
 */
const CirclePhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm25.2 122.1l4.9-12.1 12.9 2.3 88 16 13.1 2.4 0 13.4 0 16c0 132.5-107.5 240-240 240l-16 0-13.4 0-2.4-13.1-16-88L109.9 286l12.1-4.9 80-32 9.8-3.9 7.5 7.5L238 271.4c13-9.1 24.3-20.4 33.4-33.4l-18.7-18.7-7.5-7.5 3.9-9.8 32-80zM368 160l0-2.6-62-11.3-23.2 58.1 20.3 20.3 8.7 8.7-6.1 10.6c-14.8 25.7-36.2 47.1-61.9 61.9l-10.6 6.1-8.7-8.7-20.3-20.3L146.1 306l11.3 62 2.6 0c114.9 0 208-93.1 208-208z" />
    </Icon>
);

export default CirclePhoneFlip;