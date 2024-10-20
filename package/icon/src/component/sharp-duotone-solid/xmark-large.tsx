
import { Icon, generic } from "../../index";

/**
 * A component that renders the `xmark-large` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-large?s=sharp-duotone-solid xmark-large}
 * @preview ![xmark-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/xmark-large.svg)
 */
const XmarkLarge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M70.6 57.4L48 34.7 2.7 80l22.6 22.6L178.7 256 25.4 409.4 2.7 432 48 477.3l22.6-22.6L224 301.3 377.4 454.6 400 477.3 445.3 432l-22.6-22.6L269.3 256 422.6 102.6 445.3 80 400 34.7 377.4 57.4 224 210.7 70.6 57.4z" />
    </Icon>
);

export default XmarkLarge;