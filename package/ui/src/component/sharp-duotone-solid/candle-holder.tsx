
import { Icon, generic } from "../../index";

/**
 * A component that renders the `candle-holder` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candle-holder?s=sharp-duotone-solid candle-holder}
 * @preview ![candle-holder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/candle-holder.svg)
 */
const CandleHolder: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 464l0 48 24 0 352 0c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72c0 8.4 1.4 16.5 4.1 24L256 464 64 464l-40 0L0 464zM80 112c0 44.2 35.8 80 80 80s80-35.8 80-80C240 64 160 0 160 0s-80 64-80 112zM400 440a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M128 224l-64 0 0 240 192 0 0-240-96 0 0 48 0 16-32 0 0-16 0-48z" />
    </Icon>
);

export default CandleHolder;