
import { Icon } from "../../index";

/**
 * A component that renders the `n` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/n?s=regular n}
 * @preview ![n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/n.svg)
 */
const N: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M15.8 33.5c9.5-3.5 20.1-.6 26.6 7.1L336 390.1 336 56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 400c0 10.1-6.3 19.1-15.8 22.6s-20.1 .6-26.6-7.1L48 121.9 48 456c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 56C0 45.9 6.3 36.9 15.8 33.5z" />
    </Icon>
);

export default N;