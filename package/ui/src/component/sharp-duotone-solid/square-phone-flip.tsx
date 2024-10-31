
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-phone-flip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone-flip?s=sharp-duotone-solid square-phone-flip}
 * @preview ![square-phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-phone-flip.svg)
 */
const SquarePhoneFlip: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM96 312l16 72 16 0c123.7 0 224-100.3 224-224l0-16-72-16-40 72c14 11.2 27.9 22.3 41.9 33.5c-18.1 34.2-46.2 62.3-80.4 80.4c-11.2-14-22.3-27.9-33.5-41.9L96 312z" />
        <path d="M352 144l-72-16-40 72 41.9 33.5c-18.1 34.2-46.2 62.3-80.4 80.4L168 272 96 312l16 72h16c123.7 0 224-100.3 224-224l0-16z" />
    </Icon>
);

export default SquarePhoneFlip;