
import { Icon } from "../../index";

/**
 * A component that renders the `equals` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/equals?s=regular equals}
 * @preview ![equals](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/equals.svg)
 */
const Equals: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M40 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l368 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L40 144zm0 176c-13.3 0-24 10.7-24 24s10.7 24 24 24l368 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L40 320z" />
    </Icon>
);

export default Equals;