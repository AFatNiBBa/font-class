
import { Icon } from "../../index";

/**
 * A component that renders the `download` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/download?s=sharp-light download}
 * @preview ![download](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/download.svg)
 */
const Download: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16l0-16L240 0l0 16 0 313.4L139.3 228.7 128 217.4 105.4 240l11.3 11.3 128 128L256 390.6l11.3-11.3 128-128L406.6 240 384 217.4l-11.3 11.3L272 329.4 272 16zM140.1 320L32 320 0 320l0 32L0 480l0 32 32 0 448 0 32 0 0-32 0-128 0-32-32 0-108.1 0-32 32L480 352l0 128L32 480l0-128 140.1 0-32-32zM432 416a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Download;