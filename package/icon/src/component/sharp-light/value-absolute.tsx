
import { Icon } from "../../index";

/**
 * A component that renders the `value-absolute` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/value-absolute?s=sharp-light value-absolute}
 * @preview ![value-absolute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/value-absolute.svg)
 */
const ValueAbsolute: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32L0 32 0 48 0 464l0 16 32 0 0-16L32 48l0-16zM171.3 148.7L160 137.4 137.4 160l11.3 11.3L233.4 256l-84.7 84.7L137.4 352 160 374.6l11.3-11.3L256 278.6l84.7 84.7L352 374.6 374.6 352l-11.3-11.3L278.6 256l84.7-84.7L374.6 160 352 137.4l-11.3 11.3L256 233.4l-84.7-84.7zM512 48l0-16-32 0 0 16 0 416 0 16 32 0 0-16 0-416z" />
    </Icon>
);

export default ValueAbsolute;