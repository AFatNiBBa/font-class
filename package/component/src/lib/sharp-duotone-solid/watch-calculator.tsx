
import { Icon, generic } from "../../index";

/**
 * A component that renders the `watch-calculator` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch-calculator?s=sharp-duotone-solid watch-calculator}
 * @preview ![watch-calculator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/watch-calculator.svg)
 */
const WatchCalculator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64l64 0 256 0 64 0 0 384-64 0L64 448 0 448 0 64zm64 64l0 64 256 0 0-64L64 128zm0 120l0 48 48 0 0-48-48 0zm0 88l0 48 48 0 0-48-48 0zm104-88l0 48 48 0 0-48-48 0zm0 88l0 48 48 0 0-48-48 0zm104-88l0 48 48 0 0-48-48 0zm0 88l0 48 48 0 0-48-48 0z" />
        <path d="M64 0L320 0l0 64L64 64 64 0zm48 248l0 48-48 0 0-48 48 0zm104 0l0 48-48 0 0-48 48 0zm56 0l48 0 0 48-48 0 0-48zM112 336l0 48-48 0 0-48 48 0zm56 0l48 0 0 48-48 0 0-48zm152 0l0 48-48 0 0-48 48 0zm0 176L64 512l0-64 256 0 0 64z" />
    </Icon>
);

export default WatchCalculator;