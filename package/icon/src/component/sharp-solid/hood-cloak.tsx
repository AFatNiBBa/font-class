
import { Icon } from "../../index";

/**
 * A component that renders the `hood-cloak` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hood-cloak?s=sharp-solid hood-cloak}
 * @preview ![hood-cloak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hood-cloak.svg)
 */
const HoodCloak: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 464l0 48 128 0 0-192c0-88.4 71.6-160 160-160s160 71.6 160 160l0 192 128 0 0-48-64-80 0-96c0-98.4-42.4-172.6-104.8-215.2L480 0 288 0C160 0 64 128 64 288l0 96L0 464zm416 48l0-192c0-70.7-57.3-128-128-128s-128 57.3-128 128l0 192 256 0z" />
    </Icon>
);

export default HoodCloak;