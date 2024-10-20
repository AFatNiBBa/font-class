
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gavel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gavel?s=sharp-duotone-solid gavel}
 * @preview ![gavel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gavel.svg)
 */
const Gavel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 432l80 80L232 360l-17.4-17.4 88-88c-15.1-15.1-30.2-30.2-45.3-45.3l-88 88L152 280 0 432z" />
        <path d="M344 56L320 80 432 192l24-24 56 56L368 368l-56-56 24-24L224 176l-24 24-56-56L288 0l56 56z" />
    </Icon>
);

export default Gavel;