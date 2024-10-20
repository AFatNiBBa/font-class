
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-list` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-list?s=sharp-solid clipboard-list}
 * @preview ![clipboard-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clipboard-list.svg)
 */
const ClipboardList: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M101.5 64C114.6 26.7 150.2 0 192 0s77.4 26.7 90.5 64L384 64l0 448L0 512 0 64l101.5 0zM224 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM160 352l0 32 16 0 128 0 16 0 0-32-16 0-128 0-16 0zM96 392a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm64-136l0 32 16 0 128 0 16 0 0-32-16 0-128 0-16 0zM96 296a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default ClipboardList;