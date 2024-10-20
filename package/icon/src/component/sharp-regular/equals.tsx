
import { Icon } from "../../index";

/**
 * A component that renders the `equals` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/equals?s=sharp-regular equals}
 * @preview ![equals](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/equals.svg)
 */
const Equals: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M40 144l-24 0 0 48 24 0 368 0 24 0 0-48-24 0L40 144zm0 176l-24 0 0 48 24 0 368 0 24 0 0-48-24 0L40 320z" />
    </Icon>
);

export default Equals;