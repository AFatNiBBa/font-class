
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-horizontal` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-horizontal?s=sharp-regular ruler-horizontal}
 * @preview ![ruler-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ruler-horizontal.svg)
 */
const RulerHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 336l544 0 0-160-64 0 0 48 0 16-32 0 0-16 0-48-64 0 0 48 0 16-32 0 0-16 0-48-64 0 0 48 0 16-32 0 0-16 0-48-64 0 0 48 0 16-32 0 0-16 0-48-64 0 0 48 0 16-32 0 0-16 0-48-64 0 0 160zM0 384l0-48L0 176l0-48 48 0 544 0 48 0 0 48 0 160 0 48-48 0L48 384 0 384z" />
    </Icon>
);

export default RulerHorizontal;