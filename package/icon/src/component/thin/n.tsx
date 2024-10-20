
import { Icon } from "../../index";

/**
 * A component that renders the `n` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/n?s=thin n}
 * @preview ![n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/n.svg)
 */
const N: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M5.2 32.5c3.1-1.2 6.7-.2 8.9 2.3L368 450.3 368 40c0-4.4 3.6-8 8-8s8 3.6 8 8l0 432c0 3.4-2.1 6.3-5.2 7.5s-6.7 .2-8.9-2.3L16 61.7 16 472c0 4.4-3.6 8-8 8s-8-3.6-8-8L0 40c0-3.4 2.1-6.3 5.2-7.5z" />
    </Icon>
);

export default N;