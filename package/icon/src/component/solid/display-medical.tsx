
import { Icon } from "../../index";

/**
 * A component that renders the `display-medical` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-medical?s=solid display-medical}
 * @preview ![display-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/display-medical.svg)
 */
const DisplayMedical: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L512 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-176 0 10.7 32 69.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l69.3 0L240 416 64 416c-35.3 0-64-28.7-64-64L0 64zm64 0l0 288 448 0 0-288L64 64zm192 64c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z" />
    </Icon>
);

export default DisplayMedical;