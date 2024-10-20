
import { Icon } from "../../index";

/**
 * A component that renders the `circle-3` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-3?s=sharp-light circle-3}
 * @preview ![circle-3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-3.svg)
 */
const Circle_3: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm80-360.6l0-23.4-16 0-144 0-16 0 0 32 16 0 100.7 0-79.2 67.9-5.6 4.8 0 23.4 16.1-.1 63.5-.3c26.7-.1 48.4 21.5 48.4 48.2c0 26.6-21.6 48.2-48.2 48.2l-36 0c-17.5 0-34-8.2-44.5-22.2l-2.5-3.4-9.6-12.8-25.6 19.2 9.6 12.8 2.5 3.4c16.5 22.1 42.5 35 70.1 35l36 0c44.3 0 80.2-35.9 80.2-80.2c0-44.4-36.1-80.4-80.6-80.2l-19.9 .1 78.9-67.6 5.6-4.8z" />
    </Icon>
);

export default Circle_3;