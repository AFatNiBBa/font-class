
import { Icon } from "../../index";

/**
 * A component that renders the `whistle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whistle?s=sharp-regular whistle}
 * @preview ![whistle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/whistle.svg)
 */
const Whistle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M119 95.2C107.8 76.5 87.4 64 64 64C28.7 64 0 92.7 0 128c0 28.4 18.5 52.5 44.1 60.8C36.3 209.7 32 232.4 32 256c0 106 86 192 192 192c64.7 0 121.9-32 156.7-81L536 448l71.2-76.7L640 336l-37.8-29.9L352.5 108.7C315.9 79.7 270.6 64 224 64c-38.8 0-74.8 11.5-105 31.2zM68.5 143.4c-1.4 .4-2.9 .6-4.5 .6c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16c0 .3 0 .7 0 1c-4 4.6-7.9 9.4-11.5 14.3zM402.9 324.4L365.8 305l-24.2 34.2C315.4 376.1 272.5 400 224 400c-79.5 0-144-64.5-144-144s64.5-144 144-144c35.8 0 70.6 12.1 98.7 34.3l70 55.4-11.9 15.9-14.4 19.2 38.4 28.8 14.4-19.2 11.2-14.9 139.1 110-43.7 47.1L402.9 324.4zM224 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default Whistle;