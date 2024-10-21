
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc?s=sharp-duotone-solid nfc}
 * @preview ![nfc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/nfc.svg)
 */
const Nfc: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 128l0 256 256 0 0-256-112 0 0 82.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-82.7-48 0-16 0-48 0z" />
        <path d="M448 32L0 32 0 480l448 0 0-448zM80 96l64 0 16 0 0 32 48 0 0-16 0-16 16 0 144 0 16 0 0 16 0 288 0 16-16 0L80 416l-16 0 0-16 0-288 0-16 16 0z" />
    </Icon>
);

export default Nfc;