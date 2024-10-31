
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lamp-desk` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp-desk?s=sharp-duotone-solid lamp-desk}
 * @preview ![lamp-desk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lamp-desk.svg)
 */
const LampDesk: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M92.6 246.2L97 263.8 143 448l66 0L163.4 265.8 256 173.3c0-5.3 0-10.7 0-16c-12.4-12.4-24.8-24.8-37.3-37.3L105.4 233.4 92.6 246.2zm275.8 9.4C378.5 265.7 392.5 272 408 272c30.9 0 56-25.1 56-56c0-15.5-6.3-29.5-16.4-39.6l-79.2 79.2z" />
        <path d="M257.9 0C221.5 0 192 29.5 192 65.9c0 17.5 6.9 34.3 19.3 46.6L256 157.3 256 272l48 48L512 112 464 64 349.3 64 304.6 19.3C292.2 6.9 275.4 0 257.9 0zM32 448L0 448l0 64 32 0 320 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default LampDesk;