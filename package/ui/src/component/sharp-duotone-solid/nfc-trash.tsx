
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc-trash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-trash?s=sharp-duotone-solid nfc-trash}
 * @preview ![nfc-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/nfc-trash.svg)
 */
const NfcTrash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l381.6 0-4.6-64-9.1 0L80 416l-16 0 0-16 0-288 0-16 16 0 64 0 16 0 0 32-16 0-48 0 0 256 256 0 0-96 0-96 0-64-112 0 0 82.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-98.7 0-16 16 0 144 0 16 0 0 16 0 80 34.3 0 16-32 13.7 0 0-128L0 32z" />
        <path d="M464 192l-9.9 0-4.4 8.8L438.1 224 400 224l-16 0 0 32 16 0 48 0 128 0 48 0 16 0 0-32-16 0-38.1 0-11.6-23.2-4.4-8.8-9.9 0-96 0zm-64 96l16 224 192 0 16-224-224 0z" />
    </Icon>
);

export default NfcTrash;