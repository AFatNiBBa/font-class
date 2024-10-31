
import { Icon, generic } from "../../index";

/**
 * A component that renders the `candle-holder` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candle-holder?s=duotone candle-holder}
 * @preview ![candle-holder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/candle-holder.svg)
 */
const CandleHolder: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 488c0 13.3 10.7 24 24 24l352 0c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72c0 8.4 1.4 16.5 4.1 24L256 464 64 464l-40 0c-13.3 0-24 10.7-24 24zM80 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-39.6-49.1-90.1-66.2-106.6C170.1 1.9 165.2 0 160 0s-10.1 1.9-13.8 5.4C129.1 21.9 80 72.4 80 112zM400 440a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M128 224l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 64 0c17.7 0 32 14.3 32 32l0 208L64 464l0-208c0-17.7 14.3-32 32-32l32 0z" />
    </Icon>
);

export default CandleHolder;