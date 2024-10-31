
import { Icon } from "../../index";

/**
 * A component that renders the `money-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-check?s=sharp-light money-check}
 * @preview ![money-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/money-check.svg)
 */
const MoneyCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 96l0 320 512 0 0-320L32 96zM0 64l32 0 512 0 32 0 0 32 0 320 0 32-32 0L32 448 0 448l0-32L0 96 0 64zM256 224l0 32L96 256l0-32 160 0zM96 320l384 0 0 32L96 352l0-32zM352 176l0 64 96 0 0-64-96 0zm-32-32l32 0 96 0 32 0 0 32 0 64 0 32-32 0-96 0-32 0 0-32 0-64 0-32z" />
    </Icon>
);

export default MoneyCheck;