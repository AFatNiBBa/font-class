
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-symbol` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-symbol?s=sharp-regular nfc-symbol}
 * @preview ![nfc-symbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/nfc-symbol.svg)
 */
const NfcSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path d="M141.6 26.4l13 12.1 189.7 176 17.6 16.3-32.6 35.2-17.6-16.3L135.6 86.2C82.7 123.4 48 186.4 48 256C48 331.9 89.3 400 150.3 435.2l-24 41.5C50.6 433 0 349.3 0 256S50.6 79 126.3 35.2l15.3-8.9zM464 256c0-75.9-41.3-143.9-102.3-179.2l24-41.5C461.4 79 512 162.7 512 256s-50.6 177-126.3 220.8l-15.3 8.9-13-12.1-189.7-176-17.6-16.3 32.6-35.2 17.6 16.3L376.4 425.8C429.3 388.6 464 325.6 464 256z" />
    </Icon>
);

export default NfcSymbol;