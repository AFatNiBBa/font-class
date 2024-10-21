
import { Icon } from "../../index";

/**
 * A component that renders the `circle-n` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-n?s=regular circle-n}
 * @preview ![circle-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-n.svg)
 */
const CircleN: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM203.7 138.3c-6-8.6-16.9-12.4-26.9-9.2s-16.8 12.4-16.8 22.9l0 208c0 13.3 10.7 24 24 24s24-10.7 24-24l0-131.2L308.3 373.7c6 8.6 16.9 12.4 26.9 9.2s16.8-12.4 16.8-22.9l0-208c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 131.2L203.7 138.3z" />
    </Icon>
);

export default CircleN;