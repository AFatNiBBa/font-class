
import { Icon, generic } from "../../index";

/**
 * A component that renders the `percent` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/percent?s=duotone percent}
 * @preview ![percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/percent.svg)
 */
const Percent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 416c0 8.2 3.1 16.4 9.4 22.6c12.5 12.5 32.8 12.5 45.3 0l320-320c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6c-12.5-12.5-32.8-12.5-45.3 0l-320 320C3.1 399.6 0 407.8 0 416z" />
        <path d="M64 192A64 64 0 1 0 64 64a64 64 0 1 0 0 128zM320 448a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Percent;