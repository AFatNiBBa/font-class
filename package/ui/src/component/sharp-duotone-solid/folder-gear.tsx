
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-gear` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-gear?s=sharp-duotone-solid folder-gear}
 * @preview ![folder-gear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folder-gear.svg)
 */
const FolderGear: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM129.1 251.7l32-55.4L193.6 215c8.9-7.6 19.1-13.6 30.4-17.6l0-37.5 64 0 0 37.5c11.2 4 21.5 10 30.4 17.6l32.5-18.7 32 55.4-32.5 18.7c1 5.7 1.6 11.6 1.6 17.6s-.6 11.9-1.6 17.5l32.5 18.7-32 55.4L318.4 361c-8.9 7.6-19.2 13.6-30.4 17.6l0 37.5-64 0 0-37.5c-11.2-4-21.5-10-30.4-17.6l-32.5 18.7-32-55.4 32.5-18.7c-1.1-5.7-1.6-11.6-1.6-17.5s.5-11.9 1.6-17.6l-32.5-18.7zM216 288a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
        <path d="M224 160l64 0 0 37.5c11.2 4 21.5 10 30.4 17.6l32.5-18.7 32 55.4-32.5 18.7c1 5.7 1.6 11.6 1.6 17.6s-.6 11.9-1.6 17.5l32.5 18.7-32 55.4L318.4 361c-8.9 7.6-19.2 13.6-30.4 17.6l0 37.5-64 0 0-37.5c-11.2-4-21.5-10-30.4-17.6l-32.5 18.7-32-55.4 32.5-18.7c-1.1-5.7-1.6-11.6-1.6-17.5s.5-11.9 1.6-17.6l-32.5-18.7 32-55.4L193.6 215c8.9-7.6 19.1-13.6 30.4-17.6l0-37.5zm32 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default FolderGear;