
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-triangle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-triangle?s=sharp-solid ruler-triangle}
 * @preview ![ruler-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ruler-triangle.svg)
 */
const RulerTriangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L0 512l512 0 0-48-60.7-60.7-24 24L416 438.6 393.4 416l11.3-11.3 24-24-57.4-57.4-24 24L336 358.6 313.4 336l11.3-11.3 24-24-57.4-57.4-24 24L256 278.6 233.4 256l11.3-11.3 24-24-57.4-57.4-24 24L176 198.6 153.4 176l11.3-11.3 24-24L131.3 83.3l-24 24L96 118.6 73.4 96 84.7 84.7l24-24L48 0 0 0zM128 256L256 384l-128 0 0-128z" />
    </Icon>
);

export default RulerTriangle;