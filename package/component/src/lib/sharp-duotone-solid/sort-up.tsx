
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sort-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-up?s=sharp-duotone-solid sort-up}
 * @preview ![sort-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sort-up.svg)
 */
const SortUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 48 17.8 16L160 480 302.2 352 320 336l0-48-64 0L64 288 0 288zm113.4 64l93.1 0L160 393.9 113.4 352z" />
        <path d="M0 176L160 32 320 176v48H0V176z" />
    </Icon>
);

export default SortUp;