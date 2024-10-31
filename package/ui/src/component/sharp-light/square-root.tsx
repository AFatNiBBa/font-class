
import { Icon } from "../../index";

/**
 * A component that renders the `square-root` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-root?s=sharp-light square-root}
 * @preview ![square-root](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-root.svg)
 */
const SquareRoot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M328 32l-12 0-3.3 11.6L203.5 421.8 102.1 232.4 97.6 224 88 224l-72 0L0 224l0 32 16 0 62.4 0L193.9 471.6l4.5 8.4 21.6 0 3.3-11.6L340 64l220 0 16 0 0-32-16 0L328 32z" />
    </Icon>
);

export default SquareRoot;