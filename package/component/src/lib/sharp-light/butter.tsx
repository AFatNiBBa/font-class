
import { Icon } from "../../index";

/**
 * A component that renders the `butter` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/butter?s=sharp-light butter}
 * @preview ![butter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/butter.svg)
 */
const Butter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 96l0 192-32 0 0-192L96 96l0 192-32 0L64 96l0-32 32 0 352 0 16 0 16 0 64 0 32 0 0 32 0 192-32 0 0-192-64 0zM0 320l16 0 16 0 32 0 512 0 32 0 16 0 16 0 0 32-16 0-16 0 0 64 0 32-32 0L64 448l-32 0 0-32 0-64-16 0L0 352l0-32zm64 32l0 64 512 0 0-64L64 352z" />
    </Icon>
);

export default Butter;