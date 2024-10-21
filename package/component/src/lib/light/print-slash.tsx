
import { Icon } from "../../index";

/**
 * A component that renders the `print-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print-slash?s=light print-slash}
 * @preview ![print-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/print-slash.svg)
 */
const PrintSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 463.9l0 16.1-320 0 0-128 178.3 0-40.5-32L160 320c-17.7 0-32 14.3-32 32l0 32-32 0 0-128c0-17.7 14.3-32 32-32l48.2 0-40.5-32-7.6 0c-35.3 0-64 28.7-64 64l0 128c0 17.7 14.3 32 32 32l32 0 0 64c0 17.7 14.3 32 32 32l320 0c14.8 0 27.3-10.1 30.9-23.7L480 463.9zM137.5 30.4L163 50.5C168.1 39.6 179.2 32 192 32l229.5 0c8.5 0 16.6 3.4 22.6 9.4l26.5 26.5c6 6 9.4 14.1 9.4 22.6l0 69.5 32 0 0-69.5c0-17-6.7-33.3-18.7-45.3L466.7 18.7C454.7 6.7 438.5 0 421.5 0L192 0c-23 0-43.2 12.2-54.5 30.4zM512 192l-169.8 0 40.5 32L512 224c17.7 0 32 14.3 32 32l0 95.3 32 25.3L576 256c0-35.3-28.7-64-64-64zM496 296a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4z" />
    </Icon>
);

export default PrintSlash;