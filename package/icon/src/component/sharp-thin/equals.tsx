
import { Icon } from "../../index";

/**
 * A component that renders the `equals` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/equals?s=sharp-thin equals}
 * @preview ![equals](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/equals.svg)
 */
const Equals: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 160l-8 0 0 16 8 0 400 0 8 0 0-16-8 0L24 160zm0 176l-8 0 0 16 8 0 400 0 8 0 0-16-8 0L24 336z" />
    </Icon>
);

export default Equals;