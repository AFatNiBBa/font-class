
import { Icon } from "../../index";

/**
 * A component that renders the `money-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-check?s=sharp-solid money-check}
 * @preview ![money-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/money-check.svg)
 */
const MoneyCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 64L0 64 0 448l576 0 0-384zM288 224l0 32L96 256l0-32 192 0zm192 96l0 32L96 352l0-32 384 0zm0-160l0 96-128 0 0-96 128 0z" />
    </Icon>
);

export default MoneyCheck;