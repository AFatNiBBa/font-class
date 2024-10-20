
import { Icon } from "../../index";

/**
 * A component that renders the `sort-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-down?s=sharp-solid sort-down}
 * @preview ![sort-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sort-down.svg)
 */
const SortDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 336L160 480 320 336V288H0v48z" />
    </Icon>
);

export default SortDown;