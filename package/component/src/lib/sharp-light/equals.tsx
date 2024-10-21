
import { Icon } from "../../index";

/**
 * A component that renders the `equals` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/equals?s=sharp-light equals}
 * @preview ![equals](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/equals.svg)
 */
const Equals: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 144l-16 0 0 32 16 0 384 0 16 0 0-32-16 0L32 144zm0 192l-16 0 0 32 16 0 384 0 16 0 0-32-16 0L32 336z" />
    </Icon>
);

export default Equals;