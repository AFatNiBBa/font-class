
import { Icon } from "../../index";

/**
 * A component that renders the `square-u` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-u?s=sharp-regular square-u}
 * @preview ![square-u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-u.svg)
 */
const SquareU: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM160 160l0 120c0 35.3 28.7 64 64 64s64-28.7 64-64l0-120 0-24 48 0 0 24 0 120c0 53.6-37.7 98.4-88 109.4l0 2.6-24 0c-61.9 0-112-50.1-112-112l0-120 0-24 48 0 0 24z" />
    </Icon>
);

export default SquareU;