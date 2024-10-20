
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort?s=sharp-light circle-sort}
 * @preview ![circle-sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-sort.svg)
 */
const CircleSort: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 224l160 0 32 0 0-32L256 96 144 192l0 32 32 0zm142.8-32l-125.7 0L256 138.1 318.8 192zM176 288l-32 0 0 32 112 96 112-96 0-32-32 0-160 0zm142.8 32L256 373.9 193.2 320l125.7 0z" />
    </Icon>
);

export default CircleSort;