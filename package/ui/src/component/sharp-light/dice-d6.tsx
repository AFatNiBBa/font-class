
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d6` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d6?s=sharp-light dice-d6}
 * @preview ![dice-d6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dice-d6.svg)
 */
const DiceD6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 502.9l16 9.1 16-9.1L448 384l0-243.9 0-18.7-16.3-8.9L224 0 16.2 115.9 0 125l0 18.5L0 384 208 502.9zM32 365.4l0-203.2 176 103L208 466 32 365.4zM48.3 134.7L224.2 36.5l175.6 95.2L223.9 237.4 48.3 134.7zM416 159.3l0 206.1L240 466l0-200.9L416 159.3z" />
    </Icon>
);

export default DiceD6;