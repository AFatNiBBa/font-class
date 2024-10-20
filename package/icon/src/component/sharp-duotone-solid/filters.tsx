
import { Icon, generic } from "../../index";

/**
 * A component that renders the `filters` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filters?s=sharp-duotone-solid filters}
 * @preview ![filters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/filters.svg)
 */
const Filters: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96l160 0 0 13.3 9.4 9.4L320 269.3l0 18.7-32 32 0 192L160 416l0-96L0 160 0 96z" />
        <path d="M352 384V256L192 96V32H640V96L480 256V480L352 384z" />
    </Icon>
);

export default Filters;