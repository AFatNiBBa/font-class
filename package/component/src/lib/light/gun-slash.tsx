
import { Icon } from "../../index";

/**
 * A component that renders the `gun-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun-slash?s=light gun-slash}
 * @preview ![gun-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/gun-slash.svg)
 */
const GunSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM473.4 240c8.5 0 16.6-3.4 22.6-9.4L518.6 208l57.4 0c17.7 0 32-14.3 32-32l0-80c0-17.7-14.3-32-32-32l-32 0 0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16L180.1 64l40.5 32L528 96l48 0 0 80-57.4 0c-8.5 0-16.6 3.4-22.6 9.4L473.4 208l-110.9 0L403 240l70.4 0zM249.5 281.9L208 448 96 448l40.1-160.5c4.3-17 1.3-33.8-6.7-47.5l67 0-40.5-32-66.7 0L74 208l-10 0 0-72.6L32 110.2 32 208c0 17.7 14.3 32 32 32l10 0c20.8 0 36.1 19.6 31 39.8L65 440.2c-2.4 9.6-.2 19.7 5.8 27.5S86.1 480 96 480l112 0c14.7 0 27.5-10 31-24.2l38-152.1-27.5-21.7z" />
    </Icon>
);

export default GunSlash;