
import { Icon } from "../../index";

/**
 * A component that renders the `line-height` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/line-height?s=sharp-solid line-height}
 * @preview ![line-height](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/line-height.svg)
 */
const LineHeight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 32L0 128l0 32 64 0 0 192L0 352l0 32 96 96 96-96 0-32-64 0 0-192 64 0 0-32L96 32zM576 64L256 64l0 64 320 0 0-64zm0 160l-320 0 0 64 320 0 0-64zM256 384l0 64 320 0 0-64-320 0z" />
    </Icon>
);

export default LineHeight;