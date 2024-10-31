
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sort` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort?s=sharp-duotone-solid sort}
 * @preview ![sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sort.svg)
 */
const Sort: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 48L160 480 320 336l0-48L0 288z" />
        <path d="M0 176L160 32 320 176v48H0V176z" />
    </Icon>
);

export default Sort;