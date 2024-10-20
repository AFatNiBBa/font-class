
import { Icon } from "../../index";

/**
 * A component that renders the `display` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display?s=sharp-light display}
 * @preview ![display](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/display.svg)
 */
const Display: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 32l0 352 199.7 0c.2 0 .4 0 .6 0l111.5 0c.2 0 .4 0 .6 0L544 384l0-352L32 32zM213.1 416L32 416 0 416l0-32L0 32 0 0 32 0 544 0l32 0 0 32 0 352 0 32-32 0-181.1 0 10.7 64 58.4 0 16 0 0 32-16 0-72 0-144 0-72 0-16 0 0-32 16 0 58.4 0 10.7-64zm32.4 0l-10.7 64 106.2 0-10.7-64-84.9 0z" />
    </Icon>
);

export default Display;