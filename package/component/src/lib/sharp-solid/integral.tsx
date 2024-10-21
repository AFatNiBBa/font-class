
import { Icon } from "../../index";

/**
 * A component that renders the `integral` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/integral?s=sharp-solid integral}
 * @preview ![integral](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/integral.svg)
 */
const Integral: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M128 0l32 0L272 0l32 0 0 32 0 64 0 32-64 0 0-32 0-32-48 0 0 416 0 32-32 0L48 512l-32 0 0-32 0-64 0-32 64 0 0 32 0 32 48 0 0-416 0-32z" />
    </Icon>
);

export default Integral;