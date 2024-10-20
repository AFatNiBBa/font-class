
import { Icon } from "../../index";

/**
 * A component that renders the `circle-small` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-small?s=sharp-light circle-small}
 * @preview ![circle-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-small.svg)
 */
const CircleSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 128a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 288a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default CircleSmall;