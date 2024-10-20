
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up-right` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-right?s=solid circle-up-right}
 * @preview ![circle-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-up-right.svg)
 */
const CircleUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm96 313.4L352 176c0-8.8-7.2-16-16-16l-137.4 0c-12.5 0-22.6 10.1-22.6 22.6c0 6 2.4 11.8 6.6 16L216 232l-66.3 66.3C146 302 144 306.9 144 312s2 10 5.7 13.7l36.7 36.7c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7L280 296l33.4 33.4c4.2 4.2 10 6.6 16 6.6c12.5 0 22.6-10.1 22.6-22.6z" />
    </Icon>
);

export default CircleUpRight;