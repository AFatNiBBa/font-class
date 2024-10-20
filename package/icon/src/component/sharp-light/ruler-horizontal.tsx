
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-horizontal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-horizontal?s=sharp-light ruler-horizontal}
 * @preview ![ruler-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ruler-horizontal.svg)
 */
const RulerHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 352l576 0 0-192-80 0 0 64 0 16-32 0 0-16 0-64-64 0 0 64 0 16-32 0 0-16 0-64-64 0 0 64 0 16-32 0 0-16 0-64-64 0 0 64 0 16-32 0 0-16 0-64-64 0 0 64 0 16-32 0 0-16 0-64-80 0 0 192zM0 384l0-32L0 160l0-32 32 0 576 0 32 0 0 32 0 192 0 32-32 0L32 384 0 384z" />
    </Icon>
);

export default RulerHorizontal;