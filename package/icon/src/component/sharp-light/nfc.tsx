
import { Icon } from "../../index";

/**
 * A component that renders the `nfc` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc?s=sharp-light nfc}
 * @preview ![nfc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/nfc.svg)
 */
const Nfc: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 384L32 448 32 64l384 0zM32 32L0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32zM64 96l0 16 0 288 0 16 16 0 288 0 16 0 0-16 0-288 0-16-16 0L224 96l-16 0 0 16 0 98.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-82.7 112 0 0 256L96 384l0-256 48 0 16 0 0-32-16 0L80 96 64 96zM224 272a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
    </Icon>
);

export default Nfc;