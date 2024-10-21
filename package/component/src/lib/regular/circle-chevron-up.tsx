
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-up` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-up?s=regular circle-chevron-up}
 * @preview ![circle-chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-chevron-up.svg)
 */
const CircleChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271L273 167c-9.4-9.4-24.6-9.4-33.9 0L135 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l87-87 87 87c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z" />
    </Icon>
);

export default CircleChevronUp;