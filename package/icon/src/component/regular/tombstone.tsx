
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=regular tombstone}
 * @preview ![tombstone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tombstone.svg)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M368 432l0-240c0-79.5-64.5-144-144-144S80 112.5 80 192l0 240-48 0 0-240C32 86 118 0 224 0S416 86 416 192l0 240-48 0zM0 488c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24zM248 152l0 40 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0 0 120c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-120-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default Tombstone;