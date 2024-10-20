
import { Icon } from "../../index";

/**
 * A component that renders the `sort-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-down?s=sharp-regular sort-down}
 * @preview ![sort-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sort-down.svg)
 */
const SortDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 288L0 288l0 48L160 480 320 336l0-48-48 0L48 288zm200.2 48L160 415.4 71.8 336l176.5 0z" />
    </Icon>
);

export default SortDown;