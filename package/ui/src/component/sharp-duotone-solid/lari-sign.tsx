
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lari-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lari-sign?s=sharp-duotone-solid lari-sign}
 * @preview ![lari-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lari-sign.svg)
 */
const LariSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M112 32l0 81.4c19.8-9.1 41.3-14.9 64-16.8L176 32l-64 0zm0 156.1l0 99.9 64 0 0-127c-24 3-46 12.7-64 27.1zM208 32l0 64.7c22.7 1.9 44.2 7.7 64 16.8L272 32l-64 0zm0 129l0 127 64 0 0-99.9c-18-14.4-40-24.1-64-27.1z" />
        <path d="M64 288c0-70.7 57.3-128 128-128s128 57.3 128 128l64 0c0-106-86-192-192-192S0 182 0 288c0 49.2 18.5 94 48.9 128L0 416l0 64 192 0 192 0 0-64-192 0c-70.7 0-128-57.3-128-128z" />
    </Icon>
);

export default LariSign;