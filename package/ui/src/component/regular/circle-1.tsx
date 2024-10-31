
import { Icon } from "../../index";

/**
 * A component that renders the `circle-1` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-1?s=regular circle-1}
 * @preview ![circle-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-1.svg)
 */
const Circle_1: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM268 131.2c7.4 4.3 12 12.2 12 20.8l0 184 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l40 0 0-142.6-20.1 11.5c-11.5 6.6-26.2 2.6-32.7-8.9s-2.6-26.2 8.9-32.7l56-32c7.4-4.2 16.6-4.2 24 .1z" />
    </Icon>
);

export default Circle_1;