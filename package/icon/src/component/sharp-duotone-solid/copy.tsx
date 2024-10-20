
import { Icon, generic } from "../../index";

/**
 * A component that renders the `copy` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/copy?s=sharp-duotone-solid copy}
 * @preview ![copy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/copy.svg)
 */
const Copy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 128l0 64L0 448l0 64 64 0 192 0 64 0 0-64 0-32-64 0 0 32L64 448l0-256 64 0 0-64-64 0L0 128z" />
        <path d="M160 0H352l96 96V384H160V0z" />
    </Icon>
);

export default Copy;