
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-check?s=sharp-duotone-solid money-check}
 * @preview ![money-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/money-check.svg)
 */
const MoneyCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l576 0 0-384L0 64zM96 224l224 0 0 32L96 256l0-32zm0 96l384 0 0 32L96 352l0-32zM384 160l96 0 0 96-96 0 0-96z" />
        <path d="M480 160l-96 0 0 96 96 0 0-96zM320 224L96 224l0 32 224 0 0-32z" />
    </Icon>
);

export default MoneyCheck;