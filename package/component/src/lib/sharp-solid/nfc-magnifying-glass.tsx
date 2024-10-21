
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-magnifying-glass` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-magnifying-glass?s=sharp-solid nfc-magnifying-glass}
 * @preview ![nfc-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/nfc-magnifying-glass.svg)
 */
const NfcMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 32l448 0 0 128c-22.8 0-44.4 4.8-64 13.3l0-61.3 0-16-16 0L224 96l-16 0 0 16 0 98.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-82.7 112 0 0 64c-38.9 29.2-64 75.7-64 128c0 22.8 4.8 44.4 13.3 64L96 384l0-256 48 0 16 0 0-32-16 0L80 96 64 96l0 16 0 288 0 16 16 0 240 0c29.2 38.9 75.7 64 128 64L0 480 0 32zM448 400.2a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0 48c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9l63 62.6 17 16.9-33.8 34-17-16.9L520 426c-20.5 14-45.3 22.1-72 22.1z" />
    </Icon>
);

export default NfcMagnifyingGlass;