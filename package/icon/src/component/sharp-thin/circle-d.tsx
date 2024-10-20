
import { Icon } from "../../index";

/**
 * A component that renders the `circle-d` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-d?s=sharp-thin circle-d}
 * @preview ![circle-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-d.svg)
 */
const CircleD: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 120l-8 0 0 8 0 256 0 8 8 0 96 0c75.1 0 136-60.9 136-136s-60.9-136-136-136l-96 0zm96 256l-88 0 0-240 88 0c66.3 0 120 53.7 120 120s-53.7 120-120 120z" />
    </Icon>
);

export default CircleD;