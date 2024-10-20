
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-right?s=regular circle-up-right}
 * @preview ![circle-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-up-right.svg)
 */
const CircleUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm96 313.4c0 12.5-10.1 22.6-22.6 22.6c-6 0-11.8-2.4-16-6.6L280 296l-66.3 66.3C210 366 205.1 368 200 368s-10-2-13.7-5.7l-36.7-36.7C146 322 144 317.1 144 312s2-10 5.7-13.7L216 232l-33.4-33.4c-4.2-4.2-6.6-10-6.6-16c0-12.5 10.1-22.6 22.6-22.6L336 160c8.8 0 16 7.2 16 16l0 137.4z" />
    </Icon>
);

export default CircleUpRight;