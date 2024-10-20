
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-half-stroke` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half-stroke?s=thin diamond-half-stroke}
 * @preview ![diamond-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/diamond-half-stroke.svg)
 */
const DiamondHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 17.4c-3.3 1.2-6.4 3-9 5.7L23 239c-9.4 9.4-9.4 24.6 0 33.9L239 489c2.6 2.6 5.7 4.5 9 5.7l0-477.3zm16 0l0 477.3c3.3-1.2 6.4-3 9-5.7L489 273c9.4-9.4 9.4-24.6 0-33.9L273 23c-2.6-2.6-5.7-4.5-9-5.7zm-36.3-5.7c15.6-15.6 40.9-15.6 56.6 0l216 216c15.6 15.6 15.6 40.9 0 56.6l-216 216c-15.6 15.6-40.9 15.6-56.6 0l-216-216c-15.6-15.6-15.6-40.9 0-56.6l216-216z" />
    </Icon>
);

export default DiamondHalfStroke;