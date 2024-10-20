
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-symbol` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-symbol?s=sharp-solid nfc-symbol}
 * @preview ![nfc-symbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/nfc-symbol.svg)
 */
const NfcSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path d="M163.1 40.2L145.8 24.7 125.7 36.3C50.3 79.9 0 163.2 0 256s50.3 176.1 125.7 219.7l32-55.4C101.9 388 64 325.7 64 256c0-61.4 29.5-117.2 74.8-151.7L298.6 247.8l23.8 21.4 42.7-47.6-23.8-21.4L163.1 40.2zM348.9 471.8l17.3 15.5 20.1-11.6C461.6 432.1 512 348.8 512 256s-50.3-176.1-125.7-219.7l-32 55.4C410.1 124 448 186.4 448 256c0 61.4-29.5 117.2-74.8 151.7L213.4 264.2l-23.8-21.4-42.7 47.6 23.8 21.4 178.3 160z" />
    </Icon>
);

export default NfcSymbol;