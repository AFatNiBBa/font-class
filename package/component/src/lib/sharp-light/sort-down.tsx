
import { Icon } from "../../index";

/**
 * A component that renders the `sort-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-down?s=sharp-light sort-down}
 * @preview ![sort-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sort-down.svg)
 */
const SortDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 320l256 0 0 1.8L160 437 32 321.8l0-1.8zm0-32L0 288l0 32 0 16L160 480 320 336l0-16 0-32-32 0L32 288z" />
    </Icon>
);

export default SortDown;