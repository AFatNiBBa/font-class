
import { Icon } from "../../index";

/**
 * A component that renders the `shield-halved` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-halved?s=light shield-halved}
 * @preview ![shield-halved](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shield-halved.svg)
 */
const ShieldHalved: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 38.8l0 433.8C86.8 397.1 48.5 233.2 48 139.8c-.1-12.1 7.5-22.8 18.8-27.6L240 38.8zm32 433.8l0-433.9 173.2 73.5c11.3 4.8 18.9 15.5 18.8 27.6c-.5 93.3-38.8 257.3-192 332.8zM281 7.8c-16-6.8-34-6.8-50 0L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L281 7.8z" />
    </Icon>
);

export default ShieldHalved;