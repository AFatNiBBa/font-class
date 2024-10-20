
import { Icon } from "../../index";

/**
 * A component that renders the `money-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-check?s=sharp-thin money-check}
 * @preview ![money-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/money-check.svg)
 */
const MoneyCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 80l0 352 544 0 0-352L16 80zM0 64l16 0 544 0 16 0 0 16 0 352 0 16-16 0L16 448 0 448l0-16L0 80 0 64zM256 240l0 16L96 256l0-16 160 0zM96 336l384 0 0 16L96 352l0-16zM336 176l0 80 128 0 0-80-128 0zm-16-16l16 0 128 0 16 0 0 16 0 80 0 16-16 0-128 0-16 0 0-16 0-80 0-16z" />
    </Icon>
);

export default MoneyCheck;