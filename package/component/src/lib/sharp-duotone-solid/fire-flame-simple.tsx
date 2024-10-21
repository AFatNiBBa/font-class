
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fire-flame-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-flame-simple?s=sharp-duotone-solid fire-flame-simple}
 * @preview ![fire-flame-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fire-flame-simple.svg)
 */
const FireFlameSimple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 320.2C0 425.4 86.8 512 192 512s192-86.6 192-191.8c0-21.1-3.7-42.3-10.9-62.2c-34.8-95.8-93.3-181.2-170-248.3L192 0 180.9 9.7C104.2 76.8 45.7 162.2 10.9 258C3.7 277.8 0 299 0 320.2zm96 15.3c0-10.1 2.1-20.3 6.2-29.5l.9-2.1c16.4-36.8 40.5-69.6 70.8-96.1L192 192l18 15.7c30.3 26.5 54.5 59.3 70.8 96.1l.9 2.1c4.1 9.3 6.2 19.4 6.2 29.5c0 53-43 96.5-96 96.5s-96-43.5-96-96.5z" />
        <path d="M280.8 303.9l.9 2.1c4.1 9.3 6.2 19.4 6.2 29.5c0 53-43 96.5-96 96.5s-96-43.5-96-96.5c0-10.1 2.1-20.3 6.2-29.5l.9-2.1c16.4-36.8 40.5-69.6 70.8-96.1L192 192l18 15.7c30.3 26.5 54.5 59.3 70.8 96.1z" />
    </Icon>
);

export default FireFlameSimple;