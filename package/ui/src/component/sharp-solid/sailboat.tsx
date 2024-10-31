
import { Icon } from "../../index";

/**
 * A component that renders the `sailboat` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sailboat?s=sharp-solid sailboat}
 * @preview ![sailboat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sailboat.svg)
 */
const Sailboat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 352L256 0 528 352l-272 0zM0 384l576 0L480 512 96 512 0 384zM224 64l0 288L48 352 224 64z" />
    </Icon>
);

export default Sailboat;