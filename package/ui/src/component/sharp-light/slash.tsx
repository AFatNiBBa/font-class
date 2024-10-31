
import { Icon } from "../../index";

/**
 * A component that renders the `slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash?s=sharp-light slash}
 * @preview ![slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/slash.svg)
 */
const Slash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M19.9 .1L32.5 10 627.5 477.1l12.6 9.9-19.8 25.2-12.6-9.9L12.7 35.2 .1 25.3 19.9 .1z" />
    </Icon>
);

export default Slash;