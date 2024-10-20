
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-down-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down-right?s=light circle-arrow-down-right}
 * @preview ![circle-arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-arrow-down-right.svg)
 */
const CircleArrowDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM200 352l136 0c8.8 0 16-7.2 16-16l0-144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 105.4L187.3 164.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L297.4 320 200 320c-8.8 0-16 7.2-16 16s7.2 16 16 16z" />
    </Icon>
);

export default CircleArrowDownRight;