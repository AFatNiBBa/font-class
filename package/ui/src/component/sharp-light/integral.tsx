
import { Icon } from "../../index";

/**
 * A component that renders the `integral` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/integral?s=sharp-light integral}
 * @preview ![integral](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/integral.svg)
 */
const Integral: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M144 0l16 0L272 0l16 0 0 16 0 80 0 16-32 0 0-16 0-64-80 0 0 464 0 16-16 0L48 512l-16 0 0-16 0-80 0-16 32 0 0 16 0 64 80 0 0-464 0-16z" />
    </Icon>
);

export default Integral;