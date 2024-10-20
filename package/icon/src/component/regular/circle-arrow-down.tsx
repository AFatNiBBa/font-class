
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down?s=regular circle-arrow-down}
 * @preview ![circle-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-arrow-down.svg)
 */
const CircleArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416zm0 464A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM361 305l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-88-88c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
    </Icon>
);

export default CircleArrowDown;