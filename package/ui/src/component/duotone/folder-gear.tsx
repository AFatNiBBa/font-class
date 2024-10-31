
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-gear` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-gear?s=duotone folder-gear}
 * @preview ![folder-gear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/folder-gear.svg)
 */
const FolderGear: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L288 96c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32L64 32C28.7 32 0 60.7 0 96zM135.6 329.1c0-5.2 3-10.2 7.8-13l3-1.7c9.2-5.3 13.7-15.8 13.7-26.4s-4.5-21.1-13.7-26.4l-2.9-1.7c-6.3-3.6-9.5-11.1-6.8-18c2.1-5.5 4.6-10.8 7.4-15.9l2.3-3.9c3.1-5.1 6.5-10 10.2-14.6c4.6-5.7 12.7-6.7 19-3l2.9 1.7c9.2 5.3 20.4 4 29.6-1.3s16.1-14.5 16.1-25.1l0-3.4c0-7.3 4.9-13.8 12.1-14.9c6.5-1 13.1-1.5 19.9-1.5s13.4 .5 19.9 1.5c7.2 1.1 12.1 7.6 12.1 14.9l0 3.4c0 10.6 6.9 19.8 16.1 25.1s20.4 6.6 29.6 1.3l2.9-1.7c6.3-3.6 14.4-2.6 19 3c3.7 4.6 7.1 9.5 10.2 14.5l2.3 4c2.8 5.1 5.3 10.4 7.4 15.9c2.6 6.8-.5 14.3-6.8 18l-3 1.7c-9.2 5.3-13.7 15.8-13.7 26.4s4.5 21.1 13.7 26.4l3 1.7c4.8 2.8 7.8 7.8 7.8 13c0 1.7-.3 3.3-.9 5c-2.1 5.5-4.6 10.7-7.4 15.8l-2.4 4.2c-3 5.1-6.4 9.9-10.1 14.5c-4.6 5.7-12.7 6.7-19 3l-2.9-1.7c-9.2-5.3-20.4-4-29.6 1.3s-16.1 14.5-16.1 25.1l0 3.4c0 7.3-4.9 13.8-12.1 14.9c-6.5 1-13.1 1.5-19.9 1.5s-13.4-.5-19.9-1.5c-7.2-1.1-12.1-7.6-12.1-14.9l0-3.4c0-10.6-6.9-19.8-16.1-25.1s-20.4-6.6-29.6-1.3l-2.9 1.7c-6.3 3.6-14.4 2.6-19-3c-3.7-4.6-7.1-9.4-10.1-14.5l-2.4-4.1c-2.8-5.1-5.3-10.4-7.4-15.8c-.6-1.6-.9-3.3-.9-5zM216 288a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
        <path d="M375.5 242c2.6 6.8-.5 14.3-6.8 18l-3 1.7c-9.2 5.3-13.7 15.8-13.7 26.4s4.5 21.1 13.7 26.4l3 1.7c6.3 3.6 9.5 11.1 6.8 17.9c-2.1 5.5-4.6 10.7-7.4 15.8l-2.4 4.2c-3 5.1-6.4 9.9-10.1 14.5c-4.6 5.7-12.7 6.7-19 3l-2.9-1.7c-9.2-5.3-20.4-4-29.6 1.3s-16.1 14.5-16.1 25.1l0 3.4c0 7.3-4.9 13.8-12.1 14.9c-6.5 1-13.1 1.5-19.9 1.5s-13.4-.5-19.9-1.5c-7.2-1.1-12.1-7.6-12.1-14.9l0-3.4c0-10.6-6.9-19.8-16.1-25.1s-20.4-6.6-29.6-1.3l-2.9 1.7c-6.3 3.6-14.4 2.6-19-3c-3.7-4.6-7.1-9.4-10.1-14.5l-2.4-4.1c-2.8-5.1-5.3-10.4-7.4-15.8c-2.6-6.8 .5-14.3 6.8-17.9l3-1.7c9.2-5.3 13.7-15.8 13.7-26.4s-4.5-21.1-13.7-26.4l-2.9-1.7c-6.3-3.6-9.5-11.1-6.8-18c2.1-5.5 4.6-10.8 7.4-15.9l2.3-3.9c3.1-5.1 6.5-10 10.2-14.6c4.6-5.7 12.7-6.7 19-3l2.9 1.7c9.2 5.3 20.4 4 29.6-1.3s16.1-14.5 16.1-25.1l0-3.4c0-7.3 4.9-13.8 12.1-14.9c6.5-1 13.1-1.5 19.9-1.5s13.4 .5 19.9 1.5c7.2 1.1 12.1 7.6 12.1 14.9l0 3.4c0 10.6 6.9 19.8 16.1 25.1s20.4 6.6 29.6 1.3l2.9-1.7c6.3-3.6 14.4-2.6 19 3c3.7 4.6 7.1 9.5 10.2 14.5l2.3 4c2.8 5.1 5.3 10.4 7.4 15.9zM256 328a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default FolderGear;