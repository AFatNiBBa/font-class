
import { Icon } from "../../index";

/**
 * A component that renders the `bell-ring` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-ring?s=solid bell-ring}
 * @preview ![bell-ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bell-ring.svg)
 */
const BellRing: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c-17.7 0-32 14.3-32 32l0 19.2C151 66 96 130.6 96 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S51.4 416 64 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C433.3 319.2 416 273.9 416 226.8l0-18.8c0-77.4-55-142-128-156.8L288 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7zM113.4 15.4c-9.1-9.6-24.3-10-33.9-.8C30.5 61.2 0 127.1 0 200c0 13.3 10.7 24 24 24s24-10.7 24-24c0-59.3 24.8-112.7 64.6-150.6c9.6-9.1 10-24.3 .8-33.9zM399.4 49.4C439.2 87.3 464 140.7 464 200c0 13.3 10.7 24 24 24s24-10.7 24-24c0-72.9-30.5-138.8-79.4-185.4c-9.6-9.1-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9z" />
    </Icon>
);

export default BellRing;