
import { Icon } from "../../index";

/**
 * A component that renders the `circle-4` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-4?s=regular circle-4}
 * @preview ![circle-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-4.svg)
 */
const Circle_4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM223.6 129.2c12.6 4.2 19.4 17.8 15.2 30.4L201.3 272l70.7 0 0-56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 56 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-104 0c-7.7 0-15-3.7-19.5-10s-5.7-14.3-3.3-21.6l48-144c4.2-12.6 17.8-19.4 30.4-15.2z" />
    </Icon>
);

export default Circle_4;