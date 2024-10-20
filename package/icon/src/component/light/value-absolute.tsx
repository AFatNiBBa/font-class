
import { Icon } from "../../index";

/**
 * A component that renders the `value-absolute` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/value-absolute?s=light value-absolute}
 * @preview ![value-absolute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/value-absolute.svg)
 */
const ValueAbsolute: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 32C7.2 32 0 39.2 0 48L0 464c0 8.8 7.2 16 16 16s16-7.2 16-16L32 48c0-8.8-7.2-16-16-16zM171.3 148.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L233.4 256l-84.7 84.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 278.6l84.7 84.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L278.6 256l84.7-84.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 233.4l-84.7-84.7zM512 48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 416c0 8.8 7.2 16 16 16s16-7.2 16-16l0-416z" />
    </Icon>
);

export default ValueAbsolute;