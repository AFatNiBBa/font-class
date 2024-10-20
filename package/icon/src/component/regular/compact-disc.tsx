
import { Icon } from "../../index";

/**
 * A component that renders the `compact-disc` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compact-disc?s=regular compact-disc}
 * @preview ![compact-disc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/compact-disc.svg)
 */
const CompactDisc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-120a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM241.8 128.8c8.8-1 15.1-8.9 14.1-17.7s-8.9-15.1-17.7-14.1C164.1 105.2 105.2 164.1 97 238.2c-1 8.8 5.4 16.7 14.1 17.7s16.7-5.4 17.7-14.1c6.6-59.3 53.7-106.4 113-113z" />
    </Icon>
);

export default CompactDisc;