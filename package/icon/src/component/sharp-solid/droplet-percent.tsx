
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-percent` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-percent?s=sharp-solid droplet-percent}
 * @preview ![droplet-percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/droplet-percent.svg)
 */
const DropletPercent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 512c106 0 192-86 192-192S192 0 192 0S0 214 0 320S86 512 192 512zm86.6-256l-11.3 11.3-128 128L128 406.6 105.4 384l11.3-11.3 128-128L256 233.4 278.6 256zM136 240a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM248 352a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default DropletPercent;