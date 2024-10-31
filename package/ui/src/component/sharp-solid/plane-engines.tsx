
import { Icon } from "../../index";

/**
 * A component that renders the `plane-engines` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-engines?s=sharp-solid plane-engines}
 * @preview ![plane-engines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/plane-engines.svg)
 */
const PlaneEngines: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 256c0-35-59.5-64-93.7-64l-116.6 0-36.6-64 22.9 0 0-64-59.4 0L256 0 160 0l54.9 192L112 192 64 128 0 128l24.2 96.9C10.3 228.4 0 241 0 256s10.3 27.6 24.2 31.1L0 384l64 0 48-64 102.9 0L160 512l96 0 36.6-64 59.4 0 0-64-22.9 0 36.6-64 116.6 0c34.2 0 93.7-28 93.7-64z" />
    </Icon>
);

export default PlaneEngines;