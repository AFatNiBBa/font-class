
import { Icon } from "../../index";

/**
 * A component that renders the `n` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/n?s=light n}
 * @preview ![n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/n.svg)
 */
const N: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M10.5 33c6.3-2.3 13.4-.4 17.7 4.7L352 420.3 352 48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 416c0 6.7-4.2 12.7-10.5 15s-13.4 .4-17.7-4.7L32 91.7 32 464c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 48c0-6.7 4.2-12.7 10.5-15z" />
    </Icon>
);

export default N;