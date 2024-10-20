
import { Icon } from "../../index";

/**
 * A component that renders the `angle-left` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-left?s=solid angle-left}
 * @preview ![angle-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/angle-left.svg)
 */
const AngleLeft: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
    </Icon>
);

export default AngleLeft;