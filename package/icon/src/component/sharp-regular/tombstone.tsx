
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=sharp-regular tombstone}
 * @preview ![tombstone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tombstone.svg)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M368 432l0-240c0-79.5-64.5-144-144-144S80 112.5 80 192l0 240-48 0 0-240C32 86 118 0 224 0S416 86 416 192l0 240-48 0zM0 464l24 0 400 0 24 0 0 48-24 0L24 512 0 512l0-48zM248 152l0 40 48 0 24 0 0 48-24 0-48 0 0 120 0 24-48 0 0-24 0-120-48 0-24 0 0-48 24 0 48 0 0-40 0-24 48 0 0 24z" />
    </Icon>
);

export default Tombstone;