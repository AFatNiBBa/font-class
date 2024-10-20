
import { Icon } from "../../index";

/**
 * A component that renders the `money-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-check?s=sharp-regular money-check}
 * @preview ![money-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/money-check.svg)
 */
const MoneyCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 112l0 288 480 0 0-288L48 112zM0 64l48 0 480 0 48 0 0 48 0 288 0 48-48 0L48 448 0 448l0-48L0 112 0 64zM288 208l0 48L96 256l0-48 192 0zm192 96l0 48L96 352l0-48 384 0zm0-144l0 96-128 0 0-96 128 0z" />
    </Icon>
);

export default MoneyCheck;