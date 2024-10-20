
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-horizontal` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-horizontal?s=regular ruler-horizontal}
 * @preview ![ruler-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ruler-horizontal.svg)
 */
const RulerHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 320c0 8.8 7.2 16 16 16l512 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16l-48 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-64 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-64 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-64 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-64 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-48 0c-8.8 0-16 7.2-16 16l0 128zm16 64c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l512 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64L64 384z" />
    </Icon>
);

export default RulerHorizontal;