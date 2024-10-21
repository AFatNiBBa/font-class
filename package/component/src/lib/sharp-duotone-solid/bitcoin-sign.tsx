
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bitcoin-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bitcoin-sign?s=sharp-duotone-solid bitcoin-sign}
 * @preview ![bitcoin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bitcoin-sign.svg)
 */
const BitcoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M48 0l0 64 16 0 48 0 0-64L48 0zm0 448l0 64 64 0 0-64-48 0-16 0zM144 0l0 64 32 0c1.4 0 2.8 0 4.2 .1s2.7 .1 4.1 .2c2.7 .2 5.4 .5 8.1 .9c5.3 .8 10.6 1.9 15.6 3.5L208 0 144 0zm0 448l0 64 64 0 0-64-64 0z" />
        <path d="M64 128l0 96 112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L64 128zM0 224l0-96L0 64l64 0 112 0c61.9 0 112 50.1 112 112c0 24.2-7.7 46.6-20.7 64.9c31.7 19.8 52.7 55 52.7 95.1c0 61.9-50.1 112-112 112L64 448 0 448l0-64 0-96 0-64zm176 64L64 288l0 96 144 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z" />
    </Icon>
);

export default BitcoinSign;