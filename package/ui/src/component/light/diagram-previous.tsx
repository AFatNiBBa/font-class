
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-previous` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-previous?s=light diagram-previous}
 * @preview ![diagram-previous](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/diagram-previous.svg)
 */
const DiagramPrevious: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 352c0-17.7-14.3-32-32-32l-176 0-32 0L64 320c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-64zM272 288l176 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l176 0 0-105.4-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l64-64c6.2-6.2 16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L272 182.6 272 288zM448 32c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L64 64C46.3 64 32 78.3 32 96l0 64c0 17.7 14.3 32 32 32l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l384 0z" />
    </Icon>
);

export default DiagramPrevious;