
import { Icon } from "../../index";

/**
 * A component that renders the `angle-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-left?s=sharp-thin angle-left}
 * @preview ![angle-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/angle-left.svg)
 */
const AngleLeft: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M44.7 256l5.7-5.7 176-176 5.7-5.7L243.3 80l-5.7 5.7L67.3 256 237.7 426.3l5.7 5.7L232 443.3l-5.7-5.7-176-176L44.7 256z" />
    </Icon>
);

export default AngleLeft;