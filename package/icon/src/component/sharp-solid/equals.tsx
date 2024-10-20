
import { Icon } from "../../index";

/**
 * A component that renders the `equals` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/equals?s=sharp-solid equals}
 * @preview ![equals](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/equals.svg)
 */
const Equals: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 128l-32 0 0 64 32 0 352 0 32 0 0-64-32 0L48 128zm0 192l-32 0 0 64 32 0 352 0 32 0 0-64-32 0L48 320z" />
    </Icon>
);

export default Equals;