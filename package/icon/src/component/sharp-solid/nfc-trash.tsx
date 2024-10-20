
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-trash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-trash?s=sharp-solid nfc-trash}
 * @preview ![nfc-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/nfc-trash.svg)
 */
const NfcTrash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 32l448 0 0 128-13.7 0-16 32L384 192l0-80 0-16-16 0L224 96l-16 0 0 16 0 98.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-82.7 112 0 0 64 0 96 0 96L96 384l0-256 48 0 16 0 0-32-16 0L80 96 64 96l0 16 0 288 0 16 16 0 288 0 9.1 0 4.6 64L0 480 0 32zM454.1 192l9.9 0 96 0 9.9 0 4.4 8.8L585.9 224l38.1 0 16 0 0 32-16 0-48 0-128 0-48 0-16 0 0-32 16 0 38.1 0 11.6-23.2 4.4-8.8zM608 512l-192 0L400 288l224 0L608 512z" />
    </Icon>
);

export default NfcTrash;