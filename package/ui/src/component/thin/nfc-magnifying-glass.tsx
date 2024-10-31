
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-magnifying-glass` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-magnifying-glass?s=thin nfc-magnifying-glass}
 * @preview ![nfc-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/nfc-magnifying-glass.svg)
 */
const NfcMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 48L64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l314.2 0c9.6 4.7 19.8 8.4 30.4 11.1c-7.6 3.2-15.9 4.9-24.6 4.9L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 64c-5.4 0-10.7 .3-16 .8L432 96c0-26.5-21.5-48-48-48zm-16 88l0 45.4c-5.6 3.2-10.9 6.7-16 10.6l0-56c0-4.4-3.6-8-8-8l-104 0c-4.4 0-8 3.6-8 8l0 80.8c18.3 3.7 32 19.8 32 39.2c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-19.4 13.7-35.5 32-39.2l0-80.8c0-13.3 10.7-24 24-24l104 0c13.3 0 24 10.7 24 24zM309.4 400L104 400c-13.3 0-24-10.7-24-24l0-240c0-13.3 10.7-24 24-24l48 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-48 0c-4.4 0-8 3.6-8 8l0 240c0 4.4 3.6 8 8 8l197.3 0c2.4 5.5 5.1 10.8 8.1 16zM224 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM448 432.2a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0 16c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 32.5-12.1 62.1-32 84.7l93.7 93.7c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-93.7-93.7c-22.6 19.9-52.2 32-84.7 32z" />
    </Icon>
);

export default NfcMagnifyingGlass;