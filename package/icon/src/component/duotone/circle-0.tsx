
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-0` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-0?s=duotone circle-0}
 * @preview ![circle-0](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-0.svg)
 */
const Circle_0: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160-32c0-53 43-96 96-96s96 43 96 96l0 64c0 53-43 96-96 96s-96-43-96-96l0-64zm48 0l0 64c0 26.5 21.5 48 48 48s48-21.5 48-48l0-64c0-26.5-21.5-48-48-48s-48 21.5-48 48z" />
        <path d="M160 224c0-53 43-96 96-96s96 43 96 96l0 64c0 53-43 96-96 96s-96-43-96-96l0-64zm96-48c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48s48-21.5 48-48l0-64c0-26.5-21.5-48-48-48z" />
    </Icon>
);

export default Circle_0;