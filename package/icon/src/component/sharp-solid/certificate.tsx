
import { Icon } from "../../index";

/**
 * A component that renders the `certificate` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/certificate?s=sharp-solid certificate}
 * @preview ![certificate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/certificate.svg)
 */
const Certificate: typeof Icon = x => (
    <Icon {...x}>
        <path d="M187.4 0L256 57.2 324.6 0l30.8 83.9 88-15.3-15.3 88L512 187.4 454.8 256 512 324.6l-83.9 30.8 15.3 88-88-15.3L324.6 512 256 454.8 187.4 512l-30.8-83.9-88 15.3 15.3-88L0 324.6 57.2 256 0 187.4l83.9-30.8-15.3-88 88 15.3L187.4 0z" />
    </Icon>
);

export default Certificate;