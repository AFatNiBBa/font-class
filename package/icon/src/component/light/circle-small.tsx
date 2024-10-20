
import { Icon } from "../../index";

/**
 * A component that renders the `circle-small` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-small?s=light circle-small}
 * @preview ![circle-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-small.svg)
 */
const CircleSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M288 256A128 128 0 1 0 32 256a128 128 0 1 0 256 0zM0 256a160 160 0 1 1 320 0A160 160 0 1 1 0 256z" />
    </Icon>
);

export default CircleSmall;