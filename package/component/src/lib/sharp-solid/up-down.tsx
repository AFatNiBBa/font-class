
import { Icon } from "../../index";

/**
 * A component that renders the `up-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down?s=sharp-solid up-down}
 * @preview ![up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/up-down.svg)
 */
const UpDown: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M0 128L128 0 256 128l0 32-80 0 0 192 80 0 0 32L128 512 0 384l0-32 80 0 0-192L0 160l0-32z" />
    </Icon>
);

export default UpDown;