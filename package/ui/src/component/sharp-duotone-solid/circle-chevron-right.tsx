
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-chevron-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-right?s=sharp-duotone-solid circle-chevron-right}
 * @preview ![circle-chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-chevron-right.svg)
 */
const CircleChevronRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM190.1 152c5.7 5.7 11.3 11.3 17 17c29 29 58 58 87 87c-29 29-58 58-87 87c-5.7 5.7-11.3 11.3-17 17c11.3 11.3 22.6 22.6 33.9 33.9c5.7-5.7 11.3-11.3 17-17c34.7-34.7 69.3-69.3 104-104c5.7-5.7 11.3-11.3 17-17c-5.7-5.7-11.3-11.3-17-17c-34.7-34.7-69.3-69.3-104-104c-5.7-5.7-11.3-11.3-17-17L190.1 152z" />
        <path d="M361.9 256l-17 17L241 377l-17 17L190.1 360l17-17 87-87-87-87-17-17L224 118.1l17 17L345 239l17 17z" />
    </Icon>
);

export default CircleChevronRight;