
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-slash?s=duotone nfc-slash}
 * @preview ![nfc-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/nfc-slash.svg)
 */
const NfcSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 171.6L96 416c0 35.3 28.7 64 64 64l320 0c2.3 0 4.6-.1 6.9-.4L406.2 416 208 416c-26.5 0-48-21.5-48-48l0-145.9L96 171.6zM107.7 59.1c21.9 17.2 43.9 34.4 65.8 51.6c8.7-9 21-14.7 34.5-14.7l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-3.3 0-6.4 1-8.9 2.7c34.3 26.9 68.7 53.8 103 80.7c.6-.3 1.3-.5 1.9-.7l0-66.7c0-26.5 21.5-48 48-48l80 0c26.5 0 48 21.5 48 48l0 206.9c21.3 16.7 42.7 33.4 64 50.2L544 96c0-35.3-28.7-64-64-64L160 32c-21.6 0-40.7 10.7-52.3 27.1zM192 247.3L192 368c0 8.8 7.2 16 16 16l157.5 0L192 247.3zM336 144l0 66.7c18.6 6.6 32 24.4 32 45.3c0 2.3-.2 4.5-.5 6.8c26.8 21 53.6 42 80.5 63.1L448 144c0-8.8-7.2-16-16-16l-80 0c-8.8 0-16 7.2-16 16z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default NfcSlash;