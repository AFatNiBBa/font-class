
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-percent` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-percent?s=solid droplet-percent}
 * @preview ![droplet-percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/droplet-percent.svg)
 */
const DropletPercent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zm75.3-267.3c-6.2-6.2-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128c6.2-6.2 6.2-16.4 0-22.6zM136 288a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM248 400a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default DropletPercent;