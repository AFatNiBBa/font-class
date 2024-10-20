
import { Icon } from "../../index";

/**
 * A component that renders the `chart-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-simple?s=sharp-light chart-simple}
 * @preview ![chart-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chart-simple.svg)
 */
const ChartSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 64l0 384-64 0 0-384 64 0zM192 32l-32 0 0 32 0 384 0 32 32 0 64 0 32 0 0-32 0-384 0-32-32 0-64 0zM96 256l0 192-64 0 0-192 64 0zM32 224L0 224l0 32L0 448l0 32 32 0 64 0 32 0 0-32 0-192 0-32-32 0-64 0zm320-96l64 0 0 320-64 0 0-320zM320 96l0 32 0 320 0 32 32 0 64 0 32 0 0-32 0-320 0-32-32 0-64 0-32 0z" />
    </Icon>
);

export default ChartSimple;