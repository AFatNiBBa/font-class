
import { Icon } from "../../index";

/**
 * A component that renders the `kerning` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kerning?s=thin kerning}
 * @preview ![kerning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/kerning.svg)
 */
const Kerning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M447.2 11.5c1.9-4 .3-8.8-3.7-10.7s-8.8-.3-10.7 3.7l-240 496c-1.9 4-.3 8.8 3.7 10.7s8.8 .3 10.7-3.7l240-496zm-432 88.9c-2-4-6.8-5.6-10.7-3.6s-5.6 6.8-3.6 10.7l152 304c1.4 2.7 4.1 4.4 7.2 4.4s5.8-1.7 7.2-4.4l152-304c2-4 .4-8.8-3.6-10.7s-8.8-.4-10.7 3.6L160 390.1 15.2 100.4zm320 311.2L372.9 336l214.1 0 37.8 75.6c2 4 6.8 5.6 10.7 3.6s5.6-6.8 3.6-10.7l-152-304C485.8 97.7 483 96 480 96s-5.8 1.7-7.2 4.4l-152 304c-2 4-.4 8.8 3.6 10.7s8.8 .4 10.7-3.6zM480 121.9L579.1 320l-198.1 0L480 121.9z" />
    </Icon>
);

export default Kerning;