
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sort-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-down?s=sharp-duotone-solid sort-down}
 * @preview ![sort-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sort-down.svg)
 */
const SortDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 176l0 48 64 0 192 0 64 0 0-48-17.8-16L160 32 17.8 160 0 176zm113.4-16L160 118.1 206.6 160l-93.1 0z" />
        <path d="M0 336L160 480 320 336V288H0v48z" />
    </Icon>
);

export default SortDown;