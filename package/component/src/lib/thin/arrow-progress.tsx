
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-progress` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-progress?s=thin arrow-progress}
 * @preview ![arrow-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-progress.svg)
 */
const ArrowProgress: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112A64 64 0 1 0 448 0a64 64 0 1 0 0 128zM104 56C46.6 56 0 102.6 0 160s46.6 104 104 104l304 0c48.6 0 88 39.4 88 88c0 46.1-35.4 83.9-80.5 87.7C411.4 408.3 384.5 384 352 384c-35.3 0-64 28.7-64 64s28.7 64 64 64c32.7 0 59.7-24.6 63.5-56.3C469.5 451.9 512 406.9 512 352c0-57.4-46.6-104-104-104l-304 0c-48.6 0-88-39.4-88-88s39.4-88 88-88l216 0-44.8 33.6c-3.5 2.7-4.3 7.7-1.6 11.2s7.7 4.3 11.2 1.6l64-48c2-1.5 3.2-3.9 3.2-6.4s-1.2-4.9-3.2-6.4l-64-48c-3.5-2.7-8.5-1.9-11.2 1.6s-1.9 8.5 1.6 11.2L320 56 104 56zm23.5 384c-3.9-31.6-30.9-56-63.5-56c-35.3 0-64 28.7-64 64s28.7 64 64 64c32.6 0 59.6-24.4 63.5-56l96.5 0-44.8 33.6c-3.5 2.6-4.3 7.7-1.6 11.2s7.7 4.2 11.2 1.6l64-48c2-1.5 3.2-3.9 3.2-6.4s-1.2-4.9-3.2-6.4l-64-48c-3.5-2.6-8.5-1.9-11.2 1.6s-1.9 8.6 1.6 11.2L224 440l-96.5 0zM16 448a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default ArrowProgress;