
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-slash?s=sharp-duotone-solid nfc-slash}
 * @preview ![nfc-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/nfc-slash.svg)
 */
const NfcSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 19.8 64 49.7 0-5.4 16 0 64 0 16 0 0 32-16 0-45.8 0c35.9 27.9 71.8 55.7 107.6 83.6c.7-.3 1.4-.6 2.2-.8l0-98.7 0-16 16 0 144 0 16 0 0 16 0 237.9 64 49.7L544 32 96 32zm0 139.6L96 480l391.4 0-81.2-64L176 416l-16 0 0-16 0-177.9L96 171.6zm96 75.6L192 384l173.5 0L192 247.3zM336 128l0 82.7c18.6 6.6 32 24.4 32 45.3c0 2.2-.2 4.4-.4 6.6c26.8 20.8 53.6 41.6 80.4 62.5l0-197-112 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default NfcSlash;