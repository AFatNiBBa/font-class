
import { Icon } from "../../index";

/**
 * A component that renders the `circle-a` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-a?s=sharp-thin circle-a}
 * @preview ![circle-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-a.svg)
 */
const CircleA: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm-5.1-400l-2.2 4.6L129.8 368l17.7 0 30.3-64 156.5 0 30.3 64 17.7 0-119-251.4-2.2-4.6-10.1 0zm75.7 176l-141.3 0L256 138.7 326.7 288z" />
    </Icon>
);

export default CircleA;