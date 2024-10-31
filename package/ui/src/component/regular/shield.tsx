
import { Icon } from "../../index";

/**
 * A component that renders the `shield` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield?s=regular shield}
 * @preview ![shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shield.svg)
 */
const Shield: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 49.4L73 127c-5.9 2.5-9.1 7.8-9 12.8c.5 91.4 38.4 249.3 186.4 320.1c3.6 1.7 7.8 1.7 11.3 0C409.7 389 447.6 231.2 448 139.7c0-5-3.1-10.2-9-12.8L256 49.4zM269.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0s9.2 1 13.4 2.9z" />
    </Icon>
);

export default Shield;