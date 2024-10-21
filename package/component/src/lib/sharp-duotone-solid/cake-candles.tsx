
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cake-candles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cake-candles?s=sharp-duotone-solid cake-candles}
 * @preview ![cake-candles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cake-candles.svg)
 */
const CakeCandles: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224l64 0 64 0 64 0 64 0 64 0 64 0 64 0 0 144.8L419.2 384 352 352l-64 32-64-32-64 32L96 352 28.8 384 0 368.8 0 224zM56 69.6c0-8.8 2.8-17.5 7.9-24.6L96 0l32.1 44.9c5.1 7.2 7.9 15.8 7.9 24.6l0 2.4c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-2.4zm128 0c0-8.8 2.8-17.5 7.9-24.6L224 0l32.1 44.9c5.1 7.2 7.9 15.8 7.9 24.6l0 2.4c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-2.4zm128 0c0-8.8 2.8-17.5 7.9-24.6L352 0l32.1 44.9c5.1 7.2 7.9 15.8 7.9 24.6l0 2.4c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-2.4z" />
        <path d="M128 176l0 16 0 32-64 0 0-32 0-16 0-32 64 0 0 32zm128 0l0 16 0 32-64 0 0-32 0-16 0-32 64 0 0 32zm128 0l0 16 0 32-64 0 0-32 0-16 0-32 64 0 0 32zm64 192.8L448 512 0 512 0 368.8 28.8 384 96 352l64 32 64-32 64 32 64-32 67.2 32L448 368.8z" />
    </Icon>
);

export default CakeCandles;