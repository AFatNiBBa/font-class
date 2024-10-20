
import { Icon } from "../../index";

/**
 * A component that renders the `circle-w` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-w?s=regular circle-w}
 * @preview ![circle-w](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-w.svg)
 */
const CircleW: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM150.9 168.7c-4-12.6-17.5-19.6-30.2-15.5s-19.6 17.5-15.5 30.2l64 200c3.2 9.9 12.4 16.7 22.9 16.7s19.7-6.7 22.9-16.7L256 254.7l41.1 128.6c3.2 9.9 12.4 16.7 22.9 16.7s19.7-6.7 22.9-16.7l64-200c4-12.6-2.9-26.1-15.5-30.2s-26.1 2.9-30.2 15.5L320 297.3 278.9 168.7c-3.2-9.9-12.4-16.7-22.9-16.7s-19.7 6.7-22.9 16.7L192 297.3 150.9 168.7z" />
    </Icon>
);

export default CircleW;