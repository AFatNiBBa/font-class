
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down?s=duotone arrow-down}
 * @preview ![arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-down.svg)
 */
const ArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 64l0 306.7c10.7 10.7 21.3 21.3 32 32c10.7-10.7 21.3-21.3 32-32L224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
    </Icon>
);

export default ArrowDown;