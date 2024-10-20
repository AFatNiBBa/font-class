
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up?s=duotone arrow-up}
 * @preview ![arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-up.svg)
 */
const ArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 141.3c10.7-10.7 21.3-21.3 32-32c10.7 10.7 21.3 21.3 32 32L224 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-306.7z" />
        <path d="M169.4 41.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 109.3 54.6 246.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
    </Icon>
);

export default ArrowUp;