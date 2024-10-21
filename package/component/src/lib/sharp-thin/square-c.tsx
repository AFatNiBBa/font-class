
import { Icon } from "../../index";

/**
 * A component that renders the `square-c` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-c?s=sharp-thin square-c}
 * @preview ![square-c](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-c.svg)
 */
const SquareC: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM144.8 176.8c-43.7 43.7-43.7 114.7 0 158.4s114.7 43.7 158.4 0l5.7-5.7 11.3 11.3-5.7 5.7c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0l5.7 5.7-11.3 11.3-5.7-5.7c-43.7-43.7-114.7-43.7-158.4 0z" />
    </Icon>
);

export default SquareC;