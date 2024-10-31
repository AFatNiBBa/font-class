
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-falling-burst` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-falling-burst?s=sharp-duotone-solid person-falling-burst}
 * @preview ![person-falling-burst](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-falling-burst.svg)
 */
const PersonFallingBurst: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M292.4 215.2L388 236.6l-.3 67.1c4.8 6.4 9.6 12.8 14.4 19.2L464 273.2l76.4 61.4-.4-98 95.6-21.4-76.9-60.8 42.9-88.1L506.2 88.5 464 0 421.8 88.5 326.4 66.3l42.9 88.1-76.9 60.8z" />
        <path d="M256 0l0 32 0 96 0 19.8-17.7 8.8L188 181.8 240.5 256l95.5 0 16 0 9.6 12.8 48 64 19.2 25.6-51.2 38.4-19.2-25.6L320 320l-96 0-1.4 0 84.2 130.1L324.2 477l-53.7 34.8-17.4-26.9L96 242.2 96 352l0 32-64 0 0-32 0-144 0-19.8 17.7-8.8L192 108.2 192 32l0-32 64 0zM48 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default PersonFallingBurst;