
import { Icon } from "../../index";

/**
 * A component that renders the `icicles` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/icicles?s=thin icicles}
 * @preview ![icicles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/icicles.svg)
 */
const Icicles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 28.8C0 12.9 12.9 0 28.8 0L482 0c16.6 0 30 13.4 30 30c0 1.8-.2 3.7-.5 5.5l-87.6 470c-.7 3.8-4 6.5-7.9 6.5s-7.2-2.7-7.9-6.5L342.3 154.4 295.7 314.2c-1 3.4-4 5.7-7.5 5.8s-6.6-2.1-7.7-5.5l-39-117L199.8 377.8c-.8 3.6-4.1 6.2-7.8 6.2s-7-2.6-7.8-6.2L142.6 197.5l-39 117c-1.1 3.3-4.2 5.5-7.7 5.5s-6.5-2.3-7.6-5.6l-87-277C.4 34.6 0 31.7 0 28.8zM28.8 16C21.7 16 16 21.7 16 28.8c0 1.3 .2 2.6 .6 3.8L96.2 286l40.2-120.6c1.1-3.4 4.4-5.6 8-5.5s6.6 2.7 7.4 6.2L192 340.4l40.2-174.2c.8-3.5 3.8-6 7.4-6.2s6.8 2.1 8 5.5l39.9 119.7 48.8-167.4c1-3.6 4.4-5.9 8.1-5.8s6.8 2.9 7.5 6.5L416 460.5 495.8 32.5c.2-.8 .2-1.7 .2-2.6c0-7.7-6.3-14-14-14L28.8 16z" />
    </Icon>
);

export default Icicles;