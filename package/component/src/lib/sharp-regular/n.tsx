
import { Icon } from "../../index";

/**
 * A component that renders the `n` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/n?s=sharp-regular n}
 * @preview ![n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/n.svg)
 */
const N: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 56L0 32l35.2 0 7.2 8.6L336 390.1 336 56l0-24 48 0 0 24 0 400 0 24-35.2 0-7.2-8.6L48 121.9 48 456l0 24L0 480l0-24L0 56z" />
    </Icon>
);

export default N;