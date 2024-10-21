
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-signal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-signal?s=sharp-solid nfc-signal}
 * @preview ![nfc-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/nfc-signal.svg)
 */
const NfcSignal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l448 0 0 199.1c-22.4 5.1-43.9 12.8-64 22.8L384 112l0-16-16 0L224 96l-16 0 0 16 0 98.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-82.7 112 0 0 144.5c-41.6 27.9-75.6 66.3-98.1 111.5L96 384l0-256 48 0 16 0 0-32-16 0L80 96 64 96l0 16 0 288 0 16 16 0 160.4 0c-7.2 20.4-12.2 41.8-14.6 64L0 480 0 32zM512 304c-114.9 0-208 93.1-208 208l-48 0c0-141.4 114.6-256 256-256l0 48zM480 448a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-80 64l-48 0c0-88.4 71.6-160 160-160l0 48c-61.9 0-112 50.1-112 112z" />
    </Icon>
);

export default NfcSignal;