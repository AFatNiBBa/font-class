
import { Icon } from "../../index";

/**
 * A component that renders the `seal-exclamation` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal-exclamation?s=regular seal-exclamation}
 * @preview ![seal-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/seal-exclamation.svg)
 */
const SealExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 112c12.7 0 24.9-5.1 33.9-14.1L256 51.9l46.1 46.1c9 9 21.2 14.1 33.9 14.1l64 0 0 64c0 12.7 5.1 24.9 14.1 33.9l45.6 45.6-45.6 45.6c-9 9-14.1 21.2-14.1 33.9l0 64.9-64.9 0c-12.7 0-24.9 5.1-33.9 14.1L256 459.2l-45.1-45.1c-9-9-21.2-14.1-33.9-14.1L112 400l0-64.9c0-12.7-5.1-24.9-14.1-33.9L52.4 255.5l45.6-45.6c9-9 14.1-21.2 14.1-33.9l0-64 64 0zM289.9 17.9c-18.7-18.7-49.1-18.7-67.9 0L176 64l-64 0c-26.5 0-48 21.5-48 48l0 64L18.4 221.6c-18.7 18.7-18.7 49.1 0 67.9L64 335.1 64 400c0 26.5 21.5 48 48 48l64.9 0 45.1 45.1c18.7 18.7 49.1 18.7 67.9 0L335.1 448l64.9 0c26.5 0 48-21.5 48-48l0-64.9 45.6-45.6c18.7-18.7 18.7-49.1 0-67.9L448 176l0-64c0-26.5-21.5-48-48-48l-64 0L289.9 17.9zM256 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default SealExclamation;