
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-previous` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-previous?s=regular diagram-previous}
 * @preview ![diagram-previous](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/diagram-previous.svg)
 */
const DiagramPrevious: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 416c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16l384 0c8.8 0 16 7.2 16 16l0 64zm48-64c0-35.3-28.7-64-64-64l-168 0 0-86.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-64-64c-9.4-9.4-24.6-9.4-33.9 0l-64 64c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 0 86.1L64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64zM64 224l74.3 0c-5.7-19.1-1-40.5 14.1-55.6l64-64c21.9-21.9 57.3-21.9 79.2 0l64 64c15 15 19.7 36.5 14.1 55.6l74.3 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default DiagramPrevious;