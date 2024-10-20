
import { Icon } from "../../index";

/**
 * A component that renders the `folder-gear` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-gear?s=sharp-solid folder-gear}
 * @preview ![folder-gear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/folder-gear.svg)
 */
const FolderGear: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 96l0 384L0 480 0 32l224 0 48 64 240 0zM288 160l-64 0 0 37.5c-11.2 4-21.5 10-30.4 17.6l-32.5-18.7-32 55.4 32.5 18.7c-1.1 5.7-1.6 11.6-1.6 17.6s.5 11.9 1.6 17.5l-32.5 18.7 32 55.4L193.6 361c8.9 7.6 19.2 13.6 30.4 17.6l0 37.5 64 0 0-37.5c11.2-4 21.5-10 30.4-17.6l32.5 18.7 32-55.4-32.5-18.7c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l32.5-18.7-32-55.4L318.4 215c-8.9-7.6-19.1-13.6-30.4-17.6l0-37.5zM216 288a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z" />
    </Icon>
);

export default FolderGear;