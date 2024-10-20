
import { Icon } from "../../index";

/**
 * A component that renders the `tty` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tty?s=sharp-solid tty}
 * @preview ![tty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tty.svg)
 */
const Tty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M51.2 264L0 174C29.9 132 122.9 48 256 48s226.1 84 256 126l-51.2 90-128-42 0-78c-49.6-18.1-104-18.1-153.6 0l0 78-128 42zM32 320l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm160-96l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zm-352 0l256 0 0 64-256 0 0-64z" />
    </Icon>
);

export default Tty;