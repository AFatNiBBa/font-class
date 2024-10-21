
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-magnifying-glass` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-magnifying-glass?s=regular nfc-magnifying-glass}
 * @preview ![nfc-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/nfc-magnifying-glass.svg)
 */
const NfcMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 80L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l269.7 0c20.2 20.6 46 35.8 74.8 43.1c-7.6 3.2-15.9 4.9-24.6 4.9L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 64c-16.7 0-32.8 2.6-48 7.3L400 96c0-8.8-7.2-16-16-16zm-16 72l0 29.4c-18.7 10.8-35.1 25.4-48 42.6l0-64-72 0 0 54.4c14.3 8.3 24 23.8 24 41.6c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-17.8 9.7-33.3 24-41.6l0-62.4c0-22.1 17.9-40 40-40l88 0c22.1 0 40 17.9 40 40zM309.4 400L120 400c-22.1 0-40-17.9-40-40l0-208c0-22.1 17.9-40 40-40l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 192 163.2 0c3.5 17.2 9.7 33.3 18.2 48zm138.6 .2a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0 48c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9L633 471.2c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L519.9 426c-20.5 14-45.3 22.1-71.9 22.1z" />
    </Icon>
);

export default NfcMagnifyingGlass;