
import { Icon } from "../../index";

/**
 * A component that renders the `angle-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-right?s=sharp-thin angle-right}
 * @preview ![angle-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/angle-right.svg)
 */
const AngleRight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M275.3 256l-5.7 5.7-176 176L88 443.3 76.7 432l5.7-5.7L252.7 256 82.3 85.7 76.7 80 88 68.7l5.7 5.7 176 176 5.7 5.7z" />
    </Icon>
);

export default AngleRight;