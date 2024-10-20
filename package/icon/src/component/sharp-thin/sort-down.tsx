
import { Icon } from "../../index";

/**
 * A component that renders the `sort-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-down?s=sharp-thin sort-down}
 * @preview ![sort-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sort-down.svg)
 */
const SortDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 328.9L160 458.5 304 328.9l0-24.9L16 304l0 24.9zM160 480L0 336l0-32 0-16 16 0 288 0 16 0 0 16 0 32L160 480z" />
    </Icon>
);

export default SortDown;