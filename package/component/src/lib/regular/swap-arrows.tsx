
import { Icon } from "../../index";

/**
 * A component that renders the `swap-arrows` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap-arrows?s=regular swap-arrows}
 * @preview ![swap-arrows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/swap-arrows.svg)
 */
const SwapArrows: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M111 7c9.4-9.4 24.6-9.4 33.9 0l88 88c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47L152 360c0 39.8 32.2 72 72 72s72-32.2 72-72l0-208c0-66.3 53.7-120 120-120s120 53.7 120 120l0 278.1 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-88-88c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L488 152c0-39.8-32.2-72-72-72s-72 32.2-72 72l0 208c0 66.3-53.7 120-120 120s-120-53.7-120-120l0-278.1L57 129c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L111 7z" />
    </Icon>
);

export default SwapArrows;