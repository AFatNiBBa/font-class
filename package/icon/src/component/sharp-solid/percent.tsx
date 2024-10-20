
import { Icon } from "../../index";

/**
 * A component that renders the `percent` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/percent?s=sharp-solid percent}
 * @preview ![percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/percent.svg)
 */
const Percent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M358.6 134.6L381.3 112 336 66.7 313.4 89.4l-288 288L2.7 400 48 445.3l22.6-22.6 288-288zM8 72L8 184l112 0 0-112L8 72zM264 328l0 112 112 0 0-112-112 0z" />
    </Icon>
);

export default Percent;