
import { Icon } from "../../index";

/**
 * A component that renders the `angle-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-left?s=sharp-light angle-left}
 * @preview ![angle-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/angle-left.svg)
 */
const AngleLeft: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M41.4 256l11.3-11.3 160-160L224 73.4 246.6 96l-11.3 11.3L86.6 256 235.3 404.7 246.6 416 224 438.6l-11.3-11.3-160-160L41.4 256z" />
    </Icon>
);

export default AngleLeft;