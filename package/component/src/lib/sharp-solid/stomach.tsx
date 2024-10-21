
import { Icon } from "../../index";

/**
 * A component that renders the `stomach` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stomach?s=sharp-solid stomach}
 * @preview ![stomach](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/stomach.svg)
 */
const Stomach: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 32l0-32L128 0l0 32 0 160 0 32 32 0 96 0 0 64c0 35.3-28.7 64-64 64L32 352 0 352l0 32 0 16 0 80 0 32 64 0 0-32 0-48 48 0c24.6 0 36 9.5 58.2 28.2c0 0 0 0 0 0c1.7 1.4 3.4 2.9 5.3 4.4c12.6 10.5 28.4 22.9 49.6 32.2C246.5 506.2 272 512 304 512c114.9 0 208-93.1 208-208l0-80c0-70.7-57.3-128-128-128c-47.4 0-88.7 25.7-110.9 64L192 160l0-128zM445.1 332.7c-7.2 1.9-14.6 3.3-21.1 3.3c-16.8 .2-28.4-7.9-40-16s-23.2-16.3-40-16c-7.9 .1-17.1 2.1-25.6 4.6c1.1-6.7 1.6-13.6 1.6-20.6l0-64c0-35.3 28.7-64 64-64s64 28.7 64 64l0 80c0 9.8-1 19.4-2.9 28.7z" />
    </Icon>
);

export default Stomach;