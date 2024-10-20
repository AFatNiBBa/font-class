
import { Icon } from "../../index";

/**
 * A component that renders the `box-taped` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-taped?s=sharp-regular box-taped}
 * @preview ![box-taped](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/box-taped.svg)
 */
const BoxTaped: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 160l26.7-80L95.2 80 59.6 160 160 160zm0 48L48 208l0 224 352 0 0-224-112 0 0 80-128 0 0-80zm128-48l100.4 0L352.8 80l-91.5 0L288 160zM64 32l320 0 64 144 0 256 0 48-48 0L48 480 0 480l0-48L0 176 64 32z" />
    </Icon>
);

export default BoxTaped;