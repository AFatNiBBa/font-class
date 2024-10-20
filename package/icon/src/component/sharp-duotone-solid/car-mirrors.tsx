
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-mirrors` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-mirrors?s=sharp-duotone-solid car-mirrors}
 * @preview ![car-mirrors](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car-mirrors.svg)
 */
const CarMirrors: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 400l0 80 96 0 0-80-96 0zM141.1 192l293.8 0L401.3 96 174.7 96c-11.2 32-22.4 64-33.6 96zM448 400l0 80 96 0 0-80-96 0z" />
        <path d="M152 32l-22.7 0-7.5 21.4L84.5 160 0 160l0 64 32 0 0 176 512 0 0-176 32 0 0-64-84.5 0L454.2 53.4 446.7 32 424 32 152 32zM434.9 192l-293.8 0 33.6-96 226.6 0 33.6 96zM96 288a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default CarMirrors;