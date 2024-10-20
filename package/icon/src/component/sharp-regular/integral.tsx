
import { Icon } from "../../index";

/**
 * A component that renders the `integral` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/integral?s=sharp-regular integral}
 * @preview ![integral](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/integral.svg)
 */
const Integral: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M136 0l24 0L272 0l24 0 0 24 0 72 0 24-48 0 0-24 0-48-64 0 0 440 0 24-24 0L48 512l-24 0 0-24 0-72 0-24 48 0 0 24 0 48 64 0 0-440 0-24z" />
    </Icon>
);

export default Integral;