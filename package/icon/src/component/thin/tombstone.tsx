
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=thin tombstone}
 * @preview ![tombstone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tombstone.svg)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 464l0-272c0-97.2-78.8-176-176-176S48 94.8 48 192l0 272-16 0 0-272C32 86 118 0 224 0S416 86 416 192l0 272-16 0zM0 504c0-4.4 3.6-8 8-8l432 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 512c-4.4 0-8-3.6-8-8zM232 136l0 72 80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0 0 152c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-152-80 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l80 0 0-72c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default Tombstone;