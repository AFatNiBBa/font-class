
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-ring` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-ring?s=sharp-duotone-solid bell-ring}
 * @preview ![bell-ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bell-ring.svg)
 */
const BellRing: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 368l0 48 448 0 0-48-64-72 0-88c0-77.4-55-142-128-156.8L288 0 224 0l0 51.2C151 66 96 130.6 96 208l0 88L32 368z" />
        <path d="M112.6 49.4C72.8 87.3 48 140.7 48 200L0 200C0 127.1 30.5 61.2 79.4 14.6l33.1 34.8zM320 448c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3l64 0 64 0zM464 200c0-59.3-24.8-112.7-64.6-150.6l33.1-34.8C481.5 61.2 512 127.1 512 200l-48 0z" />
    </Icon>
);

export default BellRing;