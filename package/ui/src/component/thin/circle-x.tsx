
import { Icon } from "../../index";

/**
 * A component that renders the `circle-x` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-x?s=thin circle-x}
 * @preview ![circle-x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-x.svg)
 */
const CircleX: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM158 130.8c-2.9-3.3-7.9-3.7-11.3-.8s-3.7 7.9-.8 11.3L245.4 256 146 370.8c-2.9 3.3-2.5 8.4 .8 11.3s8.4 2.5 11.3-.8l98-113 98 113c2.9 3.3 7.9 3.7 11.3 .8s3.7-7.9 .8-11.3L266.6 256 366 141.2c2.9-3.3 2.5-8.4-.8-11.3s-8.4-2.5-11.3 .8l-98 113-98-113z" />
    </Icon>
);

export default CircleX;