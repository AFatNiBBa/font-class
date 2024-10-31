
import { Icon } from "../../index";

/**
 * A component that renders the `slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash?s=sharp-thin slash}
 * @preview ![slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/slash.svg)
 */
const Slash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M9.9 0l6.3 5L633.7 494.5l6.3 5L630.1 512l-6.3-5L6.3 17.5 0 12.5 9.9 0z" />
    </Icon>
);

export default Slash;