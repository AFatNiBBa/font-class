
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-symbol` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-symbol?s=sharp-thin nfc-symbol}
 * @preview ![nfc-symbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/nfc-symbol.svg)
 */
const NfcSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path d="M376.9 474.3l4.4 4.1 5.2-3c75.3-44 126.1-125 126.1-219.4c0-94.2-50.6-178.8-126.1-222.9l-8.1 13.8C448.9 88.2 496.5 167.5 496.5 256c0 86.2-45.2 160.5-113 202.5l-186-176.3-5.8-5.5-11 11.6 5.8 5.5L376.9 474.3zM137.8 37.4l-4.3-4.2-5.2 3C51.7 80.3 0 161.6 0 256c0 94.3 51.5 178.9 128.3 222.9l8-13.9C64.4 423.8 16 344.5 16 256C16 169.8 62 95.2 131.1 53.2L314.5 229.8l5.8 5.5 11.1-11.5-5.8-5.5L137.8 37.4z" />
    </Icon>
);

export default NfcSymbol;