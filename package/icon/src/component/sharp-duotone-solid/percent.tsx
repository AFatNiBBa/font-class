
import { Icon, generic } from "../../index";

/**
 * A component that renders the `percent` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/percent?s=sharp-duotone-solid percent}
 * @preview ![percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/percent.svg)
 */
const Percent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M2.7 400L48 445.3l22.6-22.6 288-288L381.3 112 336 66.7 313.4 89.4l-288 288L2.7 400z" />
        <path d="M120 72L8 72 8 184l112 0 0-112zM376 328l-112 0 0 112 112 0 0-112z" />
    </Icon>
);

export default Percent;