
import { Icon } from "../../index";

/**
 * A component that renders the `camera-security` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-security?s=thin camera-security}
 * @preview ![camera-security](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/camera-security.svg)
 */
const CameraSecurity: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 16c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-50 0-18.8 0-182.5 0L114 400l-50 0c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l320 0zM343.9 416l40.1 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l40.1 0L67.6 475.4c-4.6 7.4-4.8 16.7-.5 24.3s12.3 12.3 21 12.3l272 0c8.7 0 16.7-4.7 21-12.3s4-16.9-.5-24.3L343.9 416zm-18.8 0l41.7 67.8c1.5 2.5 1.6 5.6 .2 8.1s-4.1 4.1-7 4.1L88 496c-2.9 0-5.6-1.6-7-4.1s-1.3-5.6 .2-8.1L122.9 416l202.2 0zM352 208A128 128 0 1 0 96 208a128 128 0 1 0 256 0zM224 96a112 112 0 1 1 0 224 112 112 0 1 1 0-224z" />
    </Icon>
);

export default CameraSecurity;