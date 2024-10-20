
import { Icon } from "../../index";

/**
 * A component that renders the `integral` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/integral?s=sharp-thin integral}
 * @preview ![integral](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/integral.svg)
 */
const Integral: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M152 0l8 0L280 0l8 0 0 8 0 80 0 8-16 0 0-8 0-72L168 16l0 488 0 8-8 0L40 512l-8 0 0-8 0-80 0-8 16 0 0 8 0 72 104 0L152 8l0-8z" />
    </Icon>
);

export default Integral;