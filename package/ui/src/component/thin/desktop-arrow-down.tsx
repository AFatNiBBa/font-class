
import { Icon } from "../../index";

/**
 * A component that renders the `desktop-arrow-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/desktop-arrow-down?s=thin desktop-arrow-down}
 * @preview ![desktop-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/desktop-arrow-down.svg)
 */
const DesktopArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 0L248 0l0 16L64 16C37.5 16 16 37.5 16 64l0 288c0 26.5 21.5 48 48 48l167.8 0 .3 0 111.7 0 .3 0L512 400c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L328 16l0-16L512 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-158.6 0 13.3 80 73.2 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0-144 0-80 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l73.2 0 13.3-80L64 416c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0zM80 64l168 0 0 16L80 80l0 192 416 0 0-192L328 80l0-16 168 0c8.8 0 16 7.2 16 16l0 192c0 8.8-7.2 16-16 16L80 288c-8.8 0-16-7.2-16-16L64 80c0-8.8 7.2-16 16-16zM225.4 496l125.1 0-13.3-80-98.4 0-13.3 80zM296 8l0 204.7 74.3-74.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-88 88c-3.1 3.1-8.2 3.1-11.3 0l-88-88c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L280 212.7 280 8c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default DesktopArrowDown;