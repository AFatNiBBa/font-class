
import { Icon } from "../../index";

/**
 * A component that renders the `text-height` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-height?s=sharp-thin text-height}
 * @preview ![text-height](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/text-height.svg)
 */
const TextHeight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M485.7 37.5L480 31.9l-5.7 5.7-80 80-5.7 5.7L400 134.5l5.7-5.7L472 62.5l0 387-66.3-66.3-5.7-5.7-11.3 11.3 5.7 5.7 80 80 5.7 5.7 5.7-5.7 80-80 5.7-5.7L560 377.5l-5.7 5.7L488 449.5l0-387 66.3 66.3 5.7 5.7 11.3-11.3-5.7-5.7-80-80zM8 32L0 32l0 8 0 64 0 8 16 0 0-8 0-56 136 0 0 416-80 0-8 0 0 16 8 0 88 0 88 0 8 0 0-16-8 0-80 0 0-416 136 0 0 56 0 8 16 0 0-8 0-64 0-8-8 0L8 32z" />
    </Icon>
);

export default TextHeight;