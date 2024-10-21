
import { Icon } from "../../index";

/**
 * A component that renders the `nfc` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc?s=thin nfc}
 * @preview ![nfc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/nfc.svg)
 */
const Nfc: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm40 96l48 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-48 0c-13.3 0-24 10.7-24 24l0 240c0 13.3 10.7 24 24 24l240 0c13.3 0 24-10.7 24-24l0-240c0-13.3-10.7-24-24-24l-104 0c-13.3 0-24 10.7-24 24l0 80.8c-18.3 3.7-32 19.8-32 39.2c0 22.1 17.9 40 40 40s40-17.9 40-40c0-19.4-13.7-35.5-32-39.2l0-80.8c0-4.4 3.6-8 8-8l104 0c4.4 0 8 3.6 8 8l0 240c0 4.4-3.6 8-8 8l-240 0c-4.4 0-8-3.6-8-8l0-240c0-4.4 3.6-8 8-8zM224 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48z" />
    </Icon>
);

export default Nfc;