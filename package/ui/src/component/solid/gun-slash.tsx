
import { Icon } from "../../index";

/**
 * A component that renders the `gun-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun-slash?s=solid gun-slash}
 * @preview ![gun-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/gun-slash.svg)
 */
const GunSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L412.3 297.8 432.9 240l31.1 0c8.5 0 16.6-3.4 22.6-9.4L509.3 208l66.7 0c17.7 0 32-14.3 32-32l0-80c0-17.7-14.3-32-32-32l-16 0 0-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8L113.9 64 38.8 5.1zM195.6 128L496 128c8.8 0 16 7.2 16 16s-7.2 16-16 16l-259.6 0-40.8-32zM338.5 240l43.4 0-9.5 26.6L338.5 240zM324.9 352L264 304l-3 0 .5-2L32 121.2 32 208c0 17.7 14.3 32 32 32l10 0c20.8 0 36.1 19.6 31 39.8L65 440.2c-2.4 9.6-.2 19.7 5.8 27.5S86.1 480 96 480l96 0c14.7 0 27.5-10 31-24.2L249 352l75.9 0z" />
    </Icon>
);

export default GunSlash;