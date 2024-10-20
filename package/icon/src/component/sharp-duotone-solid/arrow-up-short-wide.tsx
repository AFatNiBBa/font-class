
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-short-wide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-short-wide?s=sharp-duotone-solid arrow-up-short-wide}
 * @preview ![arrow-up-short-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-short-wide.svg)
 */
const ArrowUpShortWide: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 32l32 0 32 0 32 0 0 64-32 0-32 0-32 0 0-64zm0 128l32 0 96 0 32 0 0 64-32 0-96 0-32 0 0-64zm0 128l32 0 160 0 32 0 0 64-32 0-160 0-32 0 0-64zm0 128l32 0 224 0 32 0 0 64-32 0-224 0-32 0 0-64z" />
        <path d="M128 32.4l23.7 26 80 88 21.5 23.7-47.4 43.1-21.5-23.7L160 162.8 160 448l0 32-64 0 0-32 0-285.2L71.7 189.5 50.2 213.2 2.8 170.2l21.5-23.7 80-88 23.7-26z" />
    </Icon>
);

export default ArrowUpShortWide;