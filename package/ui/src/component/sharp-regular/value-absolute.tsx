
import { Icon } from "../../index";

/**
 * A component that renders the `value-absolute` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/value-absolute?s=sharp-regular value-absolute}
 * @preview ![value-absolute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/value-absolute.svg)
 */
const ValueAbsolute: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 32l0 24 0 400 0 24L0 480l0-24L0 56 0 32l48 0zM335 143l17-17L385.9 160l-17 17-79 79 79 79 17 17L352 385.9l-17-17-79-79-79 79-17 17L126.1 352l17-17 79-79-79-79-17-17L160 126.1l17 17 79 79 79-79zM512 56l0 400 0 24-48 0 0-24 0-400 0-24 48 0 0 24z" />
    </Icon>
);

export default ValueAbsolute;