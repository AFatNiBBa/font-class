
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up?s=solid circle-arrow-up}
 * @preview ![circle-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-arrow-up.svg)
 */
const CircleArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM385 215c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71L280 392c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-214.1-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 103c9.4-9.4 24.6-9.4 33.9 0L385 215z" />
    </Icon>
);

export default CircleArrowUp;