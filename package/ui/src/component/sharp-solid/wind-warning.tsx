
import { Icon } from "../../index";

/**
 * A component that renders the `wind-warning` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-warning?s=sharp-solid wind-warning}
 * @preview ![wind-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/wind-warning.svg)
 */
const WindWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M418 368c-38.7 67-111.1 112-194 112C100.3 480 0 379.7 0 256S100.3 32 224 32c118.3 0 215.2 91.8 223.4 208L384 240l-64 0 0 128 64 0 34 0zM248 152l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zM200 320l0 48 48 0 0-48-48 0zM472 464l0-64 32 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-152 0-32 0 0-64 32 0 152 0c53 0 96 43 96 96s-43 96-96 96l-32 0-32 0zm72-224l-64.5 0c-1.4-22.2-5.6-43.7-12.3-64l76.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0-32 0 0-64 32 0 32 0c53 0 96 43 96 96s-43 96-96 96z" />
    </Icon>
);

export default WindWarning;