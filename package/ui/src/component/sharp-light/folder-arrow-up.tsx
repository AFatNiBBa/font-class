
import { Icon } from "../../index";

/**
 * A component that renders the `folder-arrow-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-up?s=sharp-light folder-arrow-up}
 * @preview ![folder-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folder-arrow-up.svg)
 */
const FolderArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l192 0 48 64 208 0 32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0zm240 96l-16 0-9.6-12.8L208 64 32 64l0 384 448 0 0-320-208 0zm0 240l0 16-32 0 0-16 0-121.4-52.7 52.7L176 310.6 153.4 288l11.3-11.3 80-80L256 185.4l11.3 11.3 80 80L358.6 288 336 310.6l-11.3-11.3L272 246.6 272 368z" />
    </Icon>
);

export default FolderArrowUp;