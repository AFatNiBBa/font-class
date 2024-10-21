
import { Icon, generic } from "../../index";

/**
 * A component that renders the `binary-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary-slash?s=duotone binary-slash}
 * @preview ![binary-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/binary-slash.svg)
 */
const BinarySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 64l0 11 64 50.2L192 64l64 0 0 96-19.6 0c20.5 16.1 41.1 32.2 61.6 48.3c13.5-11.7 22-29 22-48.3l0-96c0-35.3-28.7-64-64-64L192 0c-35.3 0-64 28.7-64 64zm0 416c0 17.7 14.3 32 32 32l48 0 48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-128c0-10.3-4.9-19.9-13.3-26s-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2 0 83.6-16 0c-17.7 0-32 14.3-32 32zM320.1 348.2c-.1 1.3-.1 2.5-.1 3.8l0 96c0 35.3 28.7 64 64 64l64 0c20.1 0 38.1-9.3 49.8-23.8l-51-40.2L384 448l0-49.5-63.9-50.3zM352 192c0 17.7 14.3 32 32 32l48 0 48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-128c0-10.3-4.9-19.9-13.3-26s-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2 0 83.6-16 0c-17.7 0-32 14.3-32 32zm47.7 96c37.4 29.3 74.8 58.7 112.3 88l0-24c0-35.3-28.7-64-64-64l-48.3 0z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default BinarySlash;