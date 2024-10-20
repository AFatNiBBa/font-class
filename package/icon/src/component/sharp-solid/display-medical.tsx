
import { Icon } from "../../index";

/**
 * A component that renders the `display-medical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-medical?s=sharp-solid display-medical}
 * @preview ![display-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/display-medical.svg)
 */
const DisplayMedical: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L576 0l0 416-240 0 10.7 32 69.3 0 32 0 0 64-32 0-256 0-32 0 0-64 32 0 69.3 0L240 416 0 416 0 0zM64 64l0 288 448 0 0-288L64 64zm192 48l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64z" />
    </Icon>
);

export default DisplayMedical;