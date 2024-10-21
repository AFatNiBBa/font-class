
import { Icon } from "../../index";

/**
 * A component that renders the `value-absolute` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/value-absolute?s=solid value-absolute}
 * @preview ![value-absolute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/value-absolute.svg)
 */
const ValueAbsolute: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32C14.3 32 0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32L64 64c0-17.7-14.3-32-32-32zM182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256l-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 301.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256l73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 210.7l-73.4-73.4zM512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384z" />
    </Icon>
);

export default ValueAbsolute;