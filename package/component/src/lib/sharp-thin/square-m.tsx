
import { Icon } from "../../index";

/**
 * A component that renders the `square-m` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-m?s=sharp-thin square-m}
 * @preview ![square-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-m.svg)
 */
const SquareM: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM96 136l0-8 12.1 0 2.4 3.4L224 290.2 337.5 131.4l2.4-3.4 12.1 0 0 8 0 240 0 8-16 0 0-8 0-215L230.5 308.6l-6.5 9.1-6.5-9.1L112 161l0 215 0 8-16 0 0-8 0-240z" />
    </Icon>
);

export default SquareM;