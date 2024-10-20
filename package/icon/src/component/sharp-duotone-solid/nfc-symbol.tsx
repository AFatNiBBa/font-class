
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc-symbol` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-symbol?s=sharp-duotone-solid nfc-symbol}
 * @preview ![nfc-symbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/nfc-symbol.svg)
 */
const NfcSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M146.8 290.4l23.8 21.4 178.3 160 17.3 15.5 20.1-11.6C461.6 432.1 512 348.8 512 256s-50.3-176.1-125.7-219.7l-32 55.4C410.1 124 448 186.4 448 256c0 61.4-29.5 117.2-74.8 151.7L213.4 264.2l-23.8-21.4-42.7 47.6z" />
        <path d="M145.8 24.7l17.3 15.5 178.3 160 23.8 21.4-42.7 47.6-23.8-21.4L138.8 104.4C93.5 138.8 64 194.6 64 256c0 69.6 37.9 132 93.7 164.3l-32 55.4C50.3 432.1 0 348.8 0 256S50.3 79.9 125.7 36.3l20.1-11.6z" />
    </Icon>
);

export default NfcSymbol;