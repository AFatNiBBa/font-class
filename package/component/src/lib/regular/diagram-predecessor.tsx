
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-predecessor` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-predecessor?s=regular diagram-predecessor}
 * @preview ![diagram-predecessor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/diagram-predecessor.svg)
 */
const DiagramPredecessor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 416l0-64c0-8.8-7.2-16-16-16L64 336c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16zm-16 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64zM288 160c0 35.3-28.7 64-64 64L64 224c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l144 0 16 0 144 0c39.8 0 72 32.2 72 72l0 38.1 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23 0-38.1c0-13.3-10.7-24-24-24l-82 0c1.3 5.1 2 10.5 2 16l0 64z" />
    </Icon>
);

export default DiagramPredecessor;