
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc-lock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-lock?s=duotone nfc-lock}
 * @preview ![nfc-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/nfc-lock.svg)
 */
const NfcLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l256 0 0-64-208 0c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16l208 0 0-32c0-23.7 12.9-44.4 32-55.4l0-24.6 0-128c0-8.8-7.2-16-16-16l-80 0c-8.8 0-16 7.2-16 16l0 66.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-66.7c0-26.5 21.5-48 48-48l80 0c26.5 0 48 21.5 48 48l0 49.6c16.8-17.1 39.1-28.9 64-32.5L448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96z" />
        <path d="M432 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default NfcLock;