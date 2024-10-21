
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-symbol` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-symbol?s=regular nfc-symbol}
 * @preview ![nfc-symbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/nfc-symbol.svg)
 */
const NfcSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path d="M357.4 473.6c7.7 7.2 19.2 8.5 28.3 3.2C461.4 433 512 349.3 512 256s-50.6-177-126.3-220.8c-11.5-6.6-26.2-2.7-32.8 8.8s-2.7 26.2 8.8 32.8C422.7 112.1 464 180.1 464 256c0 69.6-34.7 132.6-87.6 169.8L200.3 262.4c-9.7-9-24.9-8.4-33.9 1.3s-8.4 24.9 1.3 33.9l189.7 176zM154.6 38.4c-7.7-7.2-19.2-8.5-28.3-3.2C50.6 79 0 162.7 0 256s50.6 177 126.3 220.8c11.5 6.6 26.2 2.7 32.8-8.8s2.7-26.2-8.8-32.8C89.3 399.9 48 331.9 48 256c0-69.6 34.7-132.6 87.6-169.8L311.7 249.6c9.7 9 24.9 8.4 33.9-1.3s8.4-24.9-1.3-33.9L154.6 38.4z" />
    </Icon>
);

export default NfcSymbol;