
import { Icon } from "../../index";

/**
 * A component that renders the `shield-cross` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-cross?s=regular shield-cross}
 * @preview ![shield-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shield-cross.svg)
 */
const ShieldCross: typeof Icon = x => (
    <Icon {...x}>
        <path d="M73 127L256 49.4 439 127c5.9 2.5 9.1 7.8 9 12.8c-.4 91.4-38.4 249.3-186.3 320.1c-3.6 1.7-7.8 1.7-11.3 0C102.4 389 64.5 231.2 64 139.7c0-5 3.1-10.2 9-12.8zM457.7 82.8L269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.8 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2zM280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 48-96 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l96 0 0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176 96 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0 0-48z" />
    </Icon>
);

export default ShieldCross;