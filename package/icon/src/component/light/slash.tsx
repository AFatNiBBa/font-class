
import { Icon } from "../../index";

/**
 * A component that renders the `slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash?s=light slash}
 * @preview ![slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/slash.svg)
 */
const Slash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M3.4 6.1C8.9-.8 19-2 25.9 3.4l608 480c6.9 5.5 8.1 15.5 2.6 22.5s-15.5 8.1-22.5 2.6L6.1 28.6C-.8 23.1-2 13 3.4 6.1z" />
    </Icon>
);

export default Slash;