
import { Icon } from "../../index";

/**
 * A component that renders the `value-absolute` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/value-absolute?s=regular value-absolute}
 * @preview ![value-absolute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/value-absolute.svg)
 */
const ValueAbsolute: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 32C10.7 32 0 42.7 0 56L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24L48 56c0-13.3-10.7-24-24-24zM177 143c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l79 79-79 79c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l79-79 79 79c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-79-79 79-79c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-79 79-79-79zM512 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400z" />
    </Icon>
);

export default ValueAbsolute;