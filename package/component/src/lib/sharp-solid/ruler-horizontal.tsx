
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-horizontal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-horizontal?s=sharp-solid ruler-horizontal}
 * @preview ![ruler-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ruler-horizontal.svg)
 */
const RulerHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 128L0 384l640 0 0-256-112 0 0 80 0 16-32 0 0-16 0-80-64 0 0 80 0 16-32 0 0-16 0-80-64 0 0 80 0 16-32 0 0-16 0-80-64 0 0 80 0 16-32 0 0-16 0-80-64 0 0 80 0 16-32 0 0-16 0-80L0 128z" />
    </Icon>
);

export default RulerHorizontal;