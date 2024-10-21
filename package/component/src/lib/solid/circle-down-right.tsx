
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down-right` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down-right?s=solid circle-down-right}
 * @preview ![circle-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-down-right.svg)
 */
const CircleDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zm96 198.6L352 336c0 8.8-7.2 16-16 16l-137.4 0c-12.5 0-22.6-10.1-22.6-22.6c0-6 2.4-11.8 6.6-16L216 280l-66.3-66.3C146 210 144 205.1 144 200s2-10 5.7-13.7l36.7-36.7c3.6-3.6 8.5-5.7 13.7-5.7s10 2 13.7 5.7L280 216l33.4-33.4c4.2-4.2 10-6.6 16-6.6c12.5 0 22.6 10.1 22.6 22.6z" />
    </Icon>
);

export default CircleDownRight;