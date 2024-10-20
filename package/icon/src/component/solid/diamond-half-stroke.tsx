
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-half-stroke` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half-stroke?s=solid diamond-half-stroke}
 * @preview ![diamond-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/diamond-half-stroke.svg)
 */
const DiamondHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 78.5L433.5 256 256 433.5l0-355.1zm28.3-66.8c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" />
    </Icon>
);

export default DiamondHalfStroke;