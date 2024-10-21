
import { Icon } from "../../index";

/**
 * A component that renders the `corner` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corner?s=regular corner}
 * @preview ![corner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/corner.svg)
 */
const Corner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 184c0-13.3 10.7-24 24-24l368 0c30.9 0 56 25.1 56 56l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-4.4-3.6-8-8-8L24 208c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Corner;