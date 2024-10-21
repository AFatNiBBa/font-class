
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-chevron-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-down?s=sharp-duotone-solid circle-chevron-down}
 * @preview ![circle-chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-chevron-down.svg)
 */
const CircleChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm118.1-32L152 190.1l17 17 87 87c29-29 58-58 87-87c5.7-5.7 11.3-11.3 17-17c11.3 11.3 22.6 22.6 33.9 33.9c-5.7 5.7-11.3 11.3-17 17c-34.7 34.7-69.3 69.3-104 104c-5.7 5.7-11.3 11.3-17 17c-5.7-5.7-11.3-11.3-17-17c-34.7-34.7-69.3-69.3-104-104c-5.7-5.7-11.3-11.3-17-17z" />
        <path d="M256 361.9l17-17L377 241l17-17L360 190.1l-17 17-87 87-87-87-17-17L118.1 224l17 17L239 345l17 17z" />
    </Icon>
);

export default CircleChevronDown;