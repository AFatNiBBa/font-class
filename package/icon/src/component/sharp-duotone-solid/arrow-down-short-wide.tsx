
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-short-wide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-short-wide?s=sharp-duotone-solid arrow-down-short-wide}
 * @preview ![arrow-down-short-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-short-wide.svg)
 */
const ArrowDownShortWide: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 32l32 0 32 0 32 0 0 64-32 0-32 0-32 0 0-64zm0 128l32 0 96 0 32 0 0 64-32 0-96 0-32 0 0-64zm0 128l32 0 160 0 32 0 0 64-32 0-160 0-32 0 0-64zm0 128l32 0 224 0 32 0 0 64-32 0-224 0-32 0 0-64z" />
        <path d="M128 480l23.7-26 80-88 21.5-23.7-47.4-43.1-21.5 23.7L160 349.7l0-285.2 0-32-64 0 0 32 0 285.2L71.7 322.9 50.2 299.2 2.8 342.3 24.3 366l80 88L128 480z" />
    </Icon>
);

export default ArrowDownShortWide;