
import { Icon } from "../../index";

/**
 * A component that renders the `gun` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun?s=solid gun}
 * @preview ![gun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/gun.svg)
 */
const Gun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8L32 64C14.3 64 0 78.3 0 96L0 208c0 17.7 14.3 32 32 32l10 0c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480l96 0c14.7 0 27.5-10 31-24.2L217 352l104.5 0c23.7 0 44.8-14.9 52.7-37.2L400.9 240l31.1 0c8.5 0 16.6-3.4 22.6-9.4L477.3 208l66.7 0c17.7 0 32-14.3 32-32l0-80c0-17.7-14.3-32-32-32l-16 0 0-8zM321.4 304L229 304l16-64 105 0-21 58.7c-1.1 3.2-4.2 5.3-7.5 5.3zM80 128l384 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default Gun;