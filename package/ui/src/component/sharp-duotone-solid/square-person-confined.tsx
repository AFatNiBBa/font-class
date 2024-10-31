
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-person-confined` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-person-confined?s=sharp-duotone-solid square-person-confined}
 * @preview ![square-person-confined](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-person-confined.svg)
 */
const SquarePersonConfined: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM76.2 416l71.6 0 8.8-17.7 12-24 12-24 4.1-8.3 54.7 54.7c12.4 12.4 29.1 19.3 46.6 19.3c36.4 0 65.9-29.5 65.9-65.9L352 224l0-32-32 0-32 0-13.3 0-9.4 9.4-16 16-9.4 9.4 0 13.3 0 66.7-41.4-41.4-51.2 8.3-24 48-12 24-12 24-12 24L76.2 416zM256 144c0 .8 0 .4 0 0z" />
        <path d="M208 96a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm66.7 96l13.3 0 32 0 32 0 0 32 0 126.1c0 36.4-29.5 65.9-65.9 65.9c-17.5 0-34.3-6.9-46.6-19.3L184.8 342l-4.1 8.3-12 24-12 24L147.8 416l-71.6 0 11.2-22.3 12-24 12-24 12-24 24-48 51.2-8.3L240 306.7l0-66.7 0-13.3 9.4-9.4 16-16 9.4-9.4z" />
    </Icon>
);

export default SquarePersonConfined;