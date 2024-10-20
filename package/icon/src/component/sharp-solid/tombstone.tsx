
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=sharp-solid tombstone}
 * @preview ![tombstone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tombstone.svg)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 192C32 86 118 0 224 0S416 86 416 192l0 224L32 416l0-224zM0 448l32 0 384 0 32 0 0 64-32 0L32 512 0 512l0-64zM248 120l0-24-48 0 0 24 0 40-48 0-24 0 0 48 24 0 48 0 0 120 0 24 48 0 0-24 0-120 48 0 24 0 0-48-24 0-48 0 0-40z" />
    </Icon>
);

export default Tombstone;