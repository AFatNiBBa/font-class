
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-half-stroke` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half-stroke?s=light diamond-half-stroke}
 * @preview ![diamond-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/diamond-half-stroke.svg)
 */
const DiamondHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 44.7l0 422.6L477.7 261.7c3.1-3.1 3.1-8.2 0-11.3L272 44.7zM240 467.3l0-422.6L34.3 250.3c-3.1 3.1-3.1 8.2 0 11.3L240 467.3zM227.7 11.7c15.6-15.6 40.9-15.6 56.6 0l216 216c15.6 15.6 15.6 40.9 0 56.6l-216 216c-15.6 15.6-40.9 15.6-56.6 0l-216-216c-15.6-15.6-15.6-40.9 0-56.6l216-216z" />
    </Icon>
);

export default DiamondHalfStroke;