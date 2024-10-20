
import { Icon } from "../../index";

/**
 * A component that renders the `swap-arrows` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap-arrows?s=thin swap-arrows}
 * @preview ![swap-arrows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/swap-arrows.svg)
 */
const SwapArrows: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M106.3 18.3c3.1-3.1 8.2-3.1 11.3 0l96 96c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L120 43.3 120 368c0 53 43 96 96 96s96-43 96-96l0-224c0-61.9 50.1-112 112-112s112 50.1 112 112l0 324.7 82.3-82.4c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-96 96c-3.1 3.1-8.2 3.1-11.3 0l-96-96c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L520 468.7 520 144c0-53-43-96-96-96s-96 43-96 96l0 224c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-324.7L21.7 125.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l96-96z" />
    </Icon>
);

export default SwapArrows;