
import { Icon } from "../../index";

/**
 * A component that renders the `square-root` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-root?s=sharp-thin square-root}
 * @preview ![square-root](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-root.svg)
 */
const SquareRoot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 32l-5.8 0-1.8 5.5L206.5 451.1 95.2 228.4 92.9 224 88 224 8 224l-8 0 0 16 8 0 75.1 0L200.8 475.6l2.2 4.4 10.7 0 1.8-5.5L357.8 48 568 48l8 0 0-16-8 0L352 32z" />
    </Icon>
);

export default SquareRoot;