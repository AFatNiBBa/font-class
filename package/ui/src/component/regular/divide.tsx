
import { Icon } from "../../index";

/**
 * A component that renders the `divide` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/divide?s=regular divide}
 * @preview ![divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/divide.svg)
 */
const Divide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M264 96a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm0 320a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zM408 280c13.3 0 24-10.7 24-24s-10.7-24-24-24L40 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l368 0z" />
    </Icon>
);

export default Divide;