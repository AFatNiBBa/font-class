
import { Icon } from "../../index";

/**
 * A component that renders the `percent` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/percent?s=sharp-light percent}
 * @preview ![percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/percent.svg)
 */
const Percent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 96L32 96l0 64 64 0 0-64zM32 64l64 0 32 0 0 32 0 64 0 32-32 0-64 0L0 192l0-32L0 96 0 64l32 0zM4.7 420.7l352-352 22.6 22.6-352 352L4.7 420.7zM288 352l0 64 64 0 0-64-64 0zm-32-32l32 0 64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32z" />
    </Icon>
);

export default Percent;