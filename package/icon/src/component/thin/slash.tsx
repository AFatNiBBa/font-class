
import { Icon } from "../../index";

/**
 * A component that renders the `slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash?s=thin slash}
 * @preview ![slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/slash.svg)
 */
const Slash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M1.7 3C4.5-.4 9.5-1 13 1.7l624 496c3.5 2.7 4 7.8 1.3 11.2s-7.8 4-11.2 1.3L3 14.3C-.4 11.5-1 6.5 1.7 3z" />
    </Icon>
);

export default Slash;