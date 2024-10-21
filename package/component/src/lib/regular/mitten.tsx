
import { Icon } from "../../index";

/**
 * A component that renders the `mitten` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mitten?s=regular mitten}
 * @preview ![mitten](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mitten.svg)
 */
const Mitten: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 142.6C0 63.8 63.8 0 142.6 0c63.7 0 119.6 42.2 137.1 103.4l21.4 75c15.7-11.8 35-18.4 55.2-18.4l4.5 0c48.2 0 87.3 39.1 87.3 87.3c0 21.9-8.3 43.1-23.1 59.2L353.3 384 304 384l0-8c0-6 2.3-11.8 6.4-16.3l79.2-85.8c6.7-7.3 10.4-16.8 10.4-26.6c0-21.7-17.6-39.3-39.3-39.3l-4.5 0c-14.6 0-28.3 7.3-36.4 19.5l-9.5 14.2c-5.2 7.8-14.4 11.8-23.7 10.4s-16.8-8.1-19.4-17.1L233.5 116.6C221.9 76 184.8 48 142.6 48C90.3 48 48 90.3 48 142.6l0 2.5c0 7.9 1 15.8 2.9 23.5l52.4 209.5c.5 1.9 .7 3.9 .7 5.8l-48.7 0L4.3 180.3C1.5 168.8 0 157 0 145.1l0-2.5zM64 416l288 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Mitten;