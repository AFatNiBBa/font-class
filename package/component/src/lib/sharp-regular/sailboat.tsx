
import { Icon } from "../../index";

/**
 * A component that renders the `sailboat` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sailboat?s=sharp-regular sailboat}
 * @preview ![sailboat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sailboat.svg)
 */
const Sailboat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 320l272 0L256 0l0 320zM56 352L0 352l28.8 48L96 512l384 0 67.2-112L576 352l-56 0L56 352zm28.8 48l406.4 0-38.4 64-329.6 0L84.8 400zM224 64L48 320l176 0 0-256z" />
    </Icon>
);

export default Sailboat;