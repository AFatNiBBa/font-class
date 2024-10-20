
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-ellipsis` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis?s=sharp-duotone-solid circle-ellipsis}
 * @preview ![circle-ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-ellipsis.svg)
 */
const CircleEllipsis: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM128 224l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0z" />
        <path d="M128 288l64 0 0-64-64 0 0 64zm160 0l0-64-64 0 0 64 64 0zm96 0l0-64-64 0 0 64 64 0z" />
    </Icon>
);

export default CircleEllipsis;