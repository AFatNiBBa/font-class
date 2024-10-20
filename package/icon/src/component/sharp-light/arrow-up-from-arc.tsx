
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-from-arc` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-arc?s=sharp-light arrow-up-from-arc}
 * @preview ![arrow-up-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-up-from-arc.svg)
 */
const ArrowUpFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480C132.3 480 32 379.7 32 256l0-16L0 240l0 16C0 397.4 114.6 512 256 512s256-114.6 256-256l0-16-32 0 0 16c0 123.7-100.3 224-224 224zM116 157.4l-10.6 12 23.9 21.3 10.6-12L240 66.1 240 336l0 16 32 0 0-16 0-269.9L372 178.6l10.6 12 23.9-21.3-10.6-12L268 13.4 256-.1 244 13.4l-128 144z" />
    </Icon>
);

export default ArrowUpFromArc;