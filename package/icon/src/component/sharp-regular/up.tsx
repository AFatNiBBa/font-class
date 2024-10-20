
import { Icon } from "../../index";

/**
 * A component that renders the `up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up?s=sharp-regular up}
 * @preview ![up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/up.svg)
 */
const Up: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M160 240l0 48 0 144 64 0 0-144 0-48 48 0 60.1 0L192 99.9 51.9 240l60.1 0 48 0zM48 288L0 288l0-48 0-16L158.1 65.9 192 32l33.9 33.9L384 224l0 16 0 48-48 0-16 0-48 0 0 48 0 96 0 48-48 0-64 0-48 0 0-48 0-96 0-48-48 0-16 0z" />
    </Icon>
);

export default Up;