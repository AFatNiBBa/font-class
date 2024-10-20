
import { Icon } from "../../index";

/**
 * A component that renders the `circle-o` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-o?s=sharp-regular circle-o}
 * @preview ![circle-o](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-o.svg)
 */
const CircleO: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm80-256a80 80 0 1 1 -160 0 80 80 0 1 1 160 0zM256 128a128 128 0 1 0 0 256 128 128 0 1 0 0-256z" />
    </Icon>
);

export default CircleO;