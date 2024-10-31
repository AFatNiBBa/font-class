
import { Icon } from "../../index";

/**
 * A component that renders the `forward` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=light forward}
 * @preview ![forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/forward.svg)
 */
const Forward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M474.4 256L256 414.1l0-316.2L474.4 256zM254 64c-16.6 0-30 13.5-30 30l0 103.4L47.7 69.7C42.5 66 36.4 64 30 64C13.5 64 0 77.5 0 94L0 418c0 16.6 13.5 30 30 30c6.3 0 12.5-2 17.6-5.7L224 314.6 224 418c0 16.6 13.5 30 30 30c6.3 0 12.5-2 17.6-5.7L502.1 275.4c6.2-4.5 9.9-11.7 9.9-19.4s-3.7-14.9-9.9-19.4L271.7 69.7C266.5 66 260.4 64 254 64zM224 275.1L32 414.1 32 97.9l192 139 0 38.2z" />
    </Icon>
);

export default Forward;