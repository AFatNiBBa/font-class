
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc-signal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-signal?s=duotone nfc-signal}
 * @preview ![nfc-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/nfc-signal.svg)
 */
const NfcSignal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l160.1 0c.7-22.1 4-43.6 9.8-64L112 416c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16l133.3 0c21.9-51.1 59.5-93.9 106.7-122.3L352 144c0-8.8-7.2-16-16-16l-80 0c-8.8 0-16 7.2-16 16l0 66.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-66.7c0-26.5 21.5-48 48-48l80 0c26.5 0 48 21.5 48 48l0 101.3c20.2-8.7 41.6-14.9 64-18.3l0-131c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96z" />
        <path d="M512 280c0-13.3-10.7-24-24-24c-128.1 0-232 103.9-232 232c0 13.3 10.7 24 24 24s24-10.7 24-24c0-101.6 82.4-184 184-184c13.3 0 24-10.7 24-24zM448 480a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm40-128c-75.1 0-136 60.9-136 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-48.6 39.4-88 88-88c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
    </Icon>
);

export default NfcSignal;