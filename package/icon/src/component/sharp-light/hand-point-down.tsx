
import { Icon } from "../../index";

/**
 * A component that renders the `hand-point-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-point-down?s=sharp-light hand-point-down}
 * @preview ![hand-point-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hand-point-down.svg)
 */
const HandPointDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 512l-16 0 0-16 0-224-16 0L0 272l0-16 0-96C0 71.6 71.6 0 160 0l64 0c88.4 0 160 71.6 160 160c0 0 0 0 0 0l0 16 0 64 0 16 0 48 0 16-16 0-64 0 0 16-16 0-64 0 0 16 0 16-16 0-64 0 0 128 0 16-16 0-80 0zm96-176l48 0 0-16 0-48-48 0 0 64zm48-96s0 0 0 0l0-48-80 0-16 0 0-32 16 0 80 0 16 0 16 0 48 0 16 0 16 0 48 0c0-70.7-57.3-128-128-128l-64 0C89.3 32 32 89.3 32 160l0 80 80 0s0 0 0 0l32 0s0 0 0 0l48 0zm32 0l0 16 0 16 0 32 48 0 0-112-48 0 0 48zM112 272l-48 0 0 208 48 0 0-112 0-16 0-80zm240-32l0-48-48 0 0 96 48 0 0-32 0-16z" />
    </Icon>
);

export default HandPointDown;