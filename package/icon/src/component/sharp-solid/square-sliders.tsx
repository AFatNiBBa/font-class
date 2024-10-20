
import { Icon } from "../../index";

/**
 * A component that renders the `square-sliders` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-sliders?s=sharp-solid square-sliders}
 * @preview ![square-sliders](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-sliders.svg)
 */
const SquareSliders: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 480l0-448L0 32 0 480l448 0zM384 304l0 64-32 0-32 0 0 16 0 32-64 0 0-32 0-16L96 368l-32 0 0-64 32 0 160 0 0-16 0-32 64 0 0 32 0 16 32 0 32 0zM352 144l32 0 0 64-32 0-160 0 0 16 0 32-64 0 0-32 0-16-32 0-32 0 0-64 32 0 32 0 0-16 0-32 64 0 0 32 0 16 160 0z" />
    </Icon>
);

export default SquareSliders;