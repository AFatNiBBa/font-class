
import { Icon } from "../../index";

/**
 * A component that renders the `droplet` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet?s=sharp-thin droplet}
 * @preview ![droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/droplet.svg)
 */
const Droplet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 320c0-22.5-10.5-52.9-28.2-87.4c-17.5-34-41-70-64.8-103c-23.7-33-47.5-62.7-65.3-84.3c-6.9-8.3-12.9-15.4-17.7-21c-4.8 5.6-10.8 12.6-17.7 21c-17.8 21.5-41.6 51.3-65.3 84.3c-23.8 33-47.3 69-64.8 103C26.5 267.1 16 297.5 16 320c0 97.2 78.8 176 176 176s176-78.8 176-176zM0 320C0 229.1 141.1 58.9 181.4 12.1C188.1 4.4 192 0 192 0s3.9 4.4 10.6 12.1C242.9 58.9 384 229.1 384 320c0 106-86 192-192 192S0 426 0 320zm192 88l0 16c-57.4 0-104-46.6-104-104l16 0c0 48.6 39.4 88 88 88z" />
    </Icon>
);

export default Droplet;