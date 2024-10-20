
import { Icon, generic } from "../../index";

/**
 * A component that renders the `xmark-large` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-large?s=duotone xmark-large}
 * @preview ![xmark-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/xmark-large.svg)
 */
const XmarkLarge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M393.4 41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L269.3 256 438.6 425.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 301.3 54.6 470.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0L224 210.7 393.4 41.4z" />
    </Icon>
);

export default XmarkLarge;