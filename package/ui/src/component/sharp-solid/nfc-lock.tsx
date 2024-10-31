
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-lock?s=sharp-solid nfc-lock}
 * @preview ![nfc-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/nfc-lock.svg)
 */
const NfcLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 32l448 0 0 129.1c-24.9 3.6-47.2 15.3-64 32.5l0-81.6 0-16-16 0L224 96l-16 0 0 16 0 98.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-82.7 112 0 0 144 0 16-32 0 0 96L96 384l0-256 48 0 16 0 0-32-16 0L80 96 64 96l0 16 0 288 0 16 16 0 240 0 0 64L0 480 0 32zM464 240c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default NfcLock;