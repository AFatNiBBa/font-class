
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-maximize` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-maximize?s=sharp-solid arrows-maximize}
 * @preview ![arrows-maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrows-maximize.svg)
 */
const ArrowsMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 32l-32 0 0 64 32 0 50.7 0L256 210.7 141.3 96 192 96l32 0 0-64-32 0L64 32 32 32l0 32 0 128 0 32 64 0 0-32 0-50.7L210.7 256 96 370.7 96 320l0-32-64 0 0 32 0 128 0 32 32 0 128 0 32 0 0-64-32 0-50.7 0L256 301.3 370.7 416 320 416l-32 0 0 64 32 0 128 0 32 0 0-32 0-128 0-32-64 0 0 32 0 50.7L301.3 256 416 141.3l0 50.7 0 32 64 0 0-32 0-128 0-32-32 0L320 32z" />
    </Icon>
);

export default ArrowsMaximize;