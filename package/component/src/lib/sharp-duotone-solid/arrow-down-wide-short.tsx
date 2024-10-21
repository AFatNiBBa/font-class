
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-wide-short` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-wide-short?s=sharp-duotone-solid arrow-down-wide-short}
 * @preview ![arrow-down-wide-short](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-wide-short.svg)
 */
const ArrowDownWideShort: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 32l0 64 32 0 224 0 32 0 0-64-32 0L320 32l-32 0zm0 128l0 64 32 0 160 0 32 0 0-64-32 0-160 0-32 0zm0 128l0 64 32 0 96 0 32 0 0-64-32 0-96 0-32 0zm0 128l0 64 32 0 32 0 32 0 0-64-32 0-32 0-32 0z" />
        <path d="M128 479.6l23.7-26 80-88 21.5-23.7-47.4-43.1-21.5 23.7L160 349.2 160 64l0-32L96 32l0 32 0 285.2L71.7 322.5 50.2 298.8 2.8 341.8l21.5 23.7 80 88 23.7 26z" />
    </Icon>
);

export default ArrowDownWideShort;