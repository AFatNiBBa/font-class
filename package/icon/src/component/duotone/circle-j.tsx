
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-j` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-j?s=duotone circle-j}
 * @preview ![circle-j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-j.svg)
 */
const CircleJ: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8c0 26.5 21.5 48 48 48s48-21.5 48-48l0-136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136c0 53-43 96-96 96s-96-43-96-96l0-8z" />
        <path d="M312 128c13.3 0 24 10.7 24 24l0 136c0 53-43 96-96 96s-96-43-96-96l0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8c0 26.5 21.5 48 48 48s48-21.5 48-48l0-136c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default CircleJ;