
import { Icon } from "../../index";

/**
 * A component that renders the `angle-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-right?s=thin angle-right}
 * @preview ![angle-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/angle-right.svg)
 */
const AngleRight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M269.7 250.3c3.1 3.1 3.1 8.2 0 11.3l-176 176c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L252.7 256 82.3 85.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l176 176z" />
    </Icon>
);

export default AngleRight;