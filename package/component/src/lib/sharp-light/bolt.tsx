
import { Icon } from "../../index";

/**
 * A component that renders the `bolt` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt?s=sharp-light bolt}
 * @preview ![bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bolt.svg)
 */
const Bolt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M303.5 184.4L338.9 49.8 352 0 310.8 30.9 32 240l0 48 88.3 5.9 32.5 2.2-8.3 31.5L109.1 462.2 96 512l41.2-30.9L416 272l0-48-88.3-5.9-32.5-2.2 8.3-31.5zM384 253.9l0 2.1L150.3 431.2l33.4-127 9.9-37.5L155 264.1l-91-6.1 0-2.1L297.7 80.8l-33.4 127-9.9 37.5 38.7 2.6 91 6.1z" />
    </Icon>
);

export default Bolt;