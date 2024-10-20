
import { Icon } from "../../index";

/**
 * A component that renders the `filters` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filters?s=sharp-thin filters}
 * @preview ![filters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/filters.svg)
 */
const Filters: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M368 272l0 104 96 72 0-176 0-6.2 4.2-4.6L624 89.8 624 48 208 48l0 41.8L363.8 261.2l4.2 4.6 0 6.2zm-16 0L192 96l0-48 0-16 16 0 416 0 16 0 0 16 0 48L480 272l0 188 0 20-16-12L352 384l0-112zm-32 28.8L288 336l0 156 0 20-16-12L160 416l0-80L0 160l0-48L0 96l16 0 144 0 0 12.4 3.3 3.6L16 112l0 41.8L171.8 325.2l4.2 4.6 0 6.2 0 72 96 72 0-144 0-6.2 4.2-4.6 40.5-44.5 3.3 3.7 0 16.4z" />
    </Icon>
);

export default Filters;