
import { Icon } from "../../index";

/**
 * A component that renders the `equals` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/equals?s=thin equals}
 * @preview ![equals](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/equals.svg)
 */
const Equals: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 160c-4.4 0-8 3.6-8 8s3.6 8 8 8l400 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L24 160zm0 176c-4.4 0-8 3.6-8 8s3.6 8 8 8l400 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L24 336z" />
    </Icon>
);

export default Equals;