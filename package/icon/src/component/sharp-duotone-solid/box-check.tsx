
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-check?s=sharp-duotone-solid box-check}
 * @preview ![box-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/box-check.svg)
 */
const BoxCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l208 0 0-128L64 32 0 160zM240 32l0 128 208 0L384 32 240 32z" />
        <path d="M448 160l-208 0 0-128-32 0 0 128L0 160 0 480l448 0 0-320zM209 409l-17 17-17-17L95 329 129 295l63 63L319 231 353 265 209 409z" />
    </Icon>
);

export default BoxCheck;