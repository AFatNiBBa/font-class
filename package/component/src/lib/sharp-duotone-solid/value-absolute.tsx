
import { Icon, generic } from "../../index";

/**
 * A component that renders the `value-absolute` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/value-absolute?s=sharp-duotone-solid value-absolute}
 * @preview ![value-absolute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/value-absolute.svg)
 */
const ValueAbsolute: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 64 0 0-32L64 64l0-32L0 32zm448 0l0 32 0 384 0 32 64 0 0-32 0-384 0-32-64 0z" />
        <path d="M182.6 137.4L160 114.7 114.7 160l22.6 22.6L210.7 256l-73.4 73.4L114.7 352 160 397.3l22.6-22.6L256 301.3l73.4 73.4L352 397.3 397.3 352l-22.6-22.6L301.3 256l73.4-73.4L397.3 160 352 114.7l-22.6 22.6L256 210.7l-73.4-73.4z" />
    </Icon>
);

export default ValueAbsolute;