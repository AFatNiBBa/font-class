
import { Icon } from "../../index";

/**
 * A component that renders the `equals` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/equals?s=light equals}
 * @preview ![equals](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/equals.svg)
 */
const Equals: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l384 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L32 144zm0 192c-8.8 0-16 7.2-16 16s7.2 16 16 16l384 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L32 336z" />
    </Icon>
);

export default Equals;