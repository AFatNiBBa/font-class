
import { Icon } from "../../index";

/**
 * A component that renders the `angle-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-left?s=sharp-solid angle-left}
 * @preview ![angle-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/angle-left.svg)
 */
const AngleLeft: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M18.7 256l22.6 22.6 160 160L224 461.3 269.3 416l-22.6-22.6L109.3 256 246.6 118.6 269.3 96 224 50.7 201.4 73.4l-160 160L18.7 256z" />
    </Icon>
);

export default AngleLeft;