
import { Icon } from "../../index";

/**
 * A component that renders the `square-u` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-u?s=regular square-u}
 * @preview ![square-u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-u.svg)
 */
const SquareU: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm160 64l0 120c0 35.3 28.7 64 64 64s64-28.7 64-64l0-120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 120c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-120c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default SquareU;