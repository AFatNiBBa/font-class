
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right?s=sharp-regular arrow-up-right}
 * @preview ![arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-up-right.svg)
 */
const ArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M328 96l24 0 0 24 0 240 0 24-48 0 0-24 0-182.1L81 401l-17 17L30.1 384l17-17 223-223L88 144l-24 0 0-48 24 0 240 0z" />
    </Icon>
);

export default ArrowUpRight;