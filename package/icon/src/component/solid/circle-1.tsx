
import { Icon } from "../../index";

/**
 * A component that renders the `circle-1` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-1?s=solid circle-1}
 * @preview ![circle-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-1.svg)
 */
const Circle_1: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM268 131.2c-7.4-4.3-16.5-4.3-24-.1l-56 32c-11.5 6.6-15.5 21.2-8.9 32.7s21.2 15.5 32.7 8.9L232 193.4 232 336l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-184c0-8.6-4.6-16.5-12-20.8z" />
    </Icon>
);

export default Circle_1;