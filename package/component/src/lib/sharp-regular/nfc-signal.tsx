
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-signal` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-signal?s=sharp-regular nfc-signal}
 * @preview ![nfc-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/nfc-signal.svg)
 */
const NfcSignal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 80L48 80l0 352 187.3 0c-4.5 15.5-7.7 31.5-9.5 48L48 480 0 480l0-48L0 80 0 32l48 0 352 0 48 0 0 48 0 151.1c-16.6 3.8-32.6 9-48 15.5L400 80zm-32 56l0 126.5c-17.2 10-33.3 21.6-48 34.8L320 160l-72 0 0 54.4c14.3 8.3 24 23.8 24 41.6c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-17.8 9.7-33.3 24-41.6l0-78.4 0-24 24 0 120 0 24 0 0 24zM246.6 400L104 400l-24 0 0-24 0-240 0-24 24 0 32 0 24 0 0 48-24 0-8 0 0 192 144.5 0c-10.1 15.1-18.8 31.1-25.9 48zM512 304c-114.9 0-208 93.1-208 208l-48 0c0-141.4 114.6-256 256-256l0 48zM480 448a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-80 64l-48 0c0-88.4 71.6-160 160-160l0 48c-61.9 0-112 50.1-112 112z" />
    </Icon>
);

export default NfcSignal;