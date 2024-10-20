
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tty?s=sharp-duotone-solid tty}
 * @preview ![tty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tty.svg)
 */
const Tty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 174C29.9 132 122.9 48 256 48s226.1 84 256 126l-51.2 90-128-42 0-78c-49.6-18.1-104-18.1-153.6 0l0 78-128 42L0 174z" />
        <path d="M96 320l-64 0 0 64 64 0 0-64zm0 96l-64 0 0 64 64 0 0-64zm32-96l0 64 64 0 0-64-64 0zm160 0l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0zm160 0l-64 0 0 64 64 0 0-64zm-64 96l0 64 64 0 0-64-64 0zm-32 0l-256 0 0 64 256 0 0-64z" />
    </Icon>
);

export default Tty;