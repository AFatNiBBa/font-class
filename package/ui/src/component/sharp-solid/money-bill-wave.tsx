
import { Icon } from "../../index";

/**
 * A component that renders the `money-bill-wave` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-wave?s=sharp-solid money-bill-wave}
 * @preview ![money-bill-wave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/money-bill-wave.svg)
 */
const MoneyBillWave: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 60.3L0 451.7c96 48.9 192 24.5 288 0s192-48.9 288 0l0-391.5c-96-48.9-192-24.5-288 0s-192 48.9-288 0zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64l-64 0 0-64zm64-208c0 35.3-28.7 64-64 64l0-64 64 0zM512 304l0 64-64 0c0-35.3 28.7-64 64-64zM448 96l64 0 0 64c-35.3 0-64-28.7-64-64z" />
    </Icon>
);

export default MoneyBillWave;