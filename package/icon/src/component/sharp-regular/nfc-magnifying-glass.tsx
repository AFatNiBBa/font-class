
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-magnifying-glass` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-magnifying-glass?s=sharp-regular nfc-magnifying-glass}
 * @preview ![nfc-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/nfc-magnifying-glass.svg)
 */
const NfcMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M400 80L48 80l0 352 285.7 0c29 29.6 69.5 48 114.3 48l-48 0L48 480 0 480l0-48L0 80 0 32l48 0 352 0 48 0 0 48 0 80c-16.7 0-32.8 2.6-48 7.3L400 80zm-32 56l0 45.4c-18.7 10.8-35.1 25.4-48 42.6l0-64-72 0 0 54.4c14.3 8.3 24 23.8 24 41.6c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-17.8 9.7-33.3 24-41.6l0-78.4 0-24 24 0 120 0 24 0 0 24zM309.4 400L104 400l-24 0 0-24 0-240 0-24 24 0 32 0 24 0 0 48-24 0-8 0 0 192 163.2 0c3.5 17.2 9.7 33.3 18.2 48zm138.6 .2a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0 48c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9l63 62.6 17 16.9-33.8 34-17-16.9L520 426c-20.5 14-45.3 22.1-72 22.1z" />
    </Icon>
);

export default NfcMagnifyingGlass;