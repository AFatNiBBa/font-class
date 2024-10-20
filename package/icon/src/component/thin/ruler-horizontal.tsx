
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-horizontal` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-horizontal?s=thin ruler-horizontal}
 * @preview ![ruler-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ruler-horizontal.svg)
 */
const RulerHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 320c0 26.5 21.5 48 48 48l512 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-56 0 0 80c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-80-80 0 0 48 0 32c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-32 0-48-80 0 0 80c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-80-80 0 0 80c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-80-80 0 0 80c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-80-56 0c-26.5 0-48 21.5-48 48l0 128zM512 128l64 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64L64 384c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l160 0 96 0 96 0 96 0z" />
    </Icon>
);

export default RulerHorizontal;