
import { Icon } from "../../index";

/**
 * A component that renders the `nfc` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc?s=light nfc}
 * @preview ![nfc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/nfc.svg)
 */
const Nfc: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm0 96l0 256c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32L240 96c-17.7 0-32 14.3-32 32l0 82.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-82.7 112 0 0 256L96 384l0-256 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 96c-17.7 0-32 14.3-32 32zM224 272a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
    </Icon>
);

export default Nfc;