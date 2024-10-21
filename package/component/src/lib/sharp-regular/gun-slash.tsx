
import { Icon } from "../../index";

/**
 * A component that renders the `gun-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun-slash?s=sharp-regular gun-slash}
 * @preview ![gun-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/gun-slash.svg)
 */
const GunSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L412.4 297.4 432.9 240l39.1 0 9.9 0 7-7 25-25 70.1 0 24 0 0-24 0-96 0-24-24 0-24 0 0-8 0-24-48 0 0 24 0 8L111.8 64 48.4 14.8zM173.6 112L512 112l48 0 0 48-56 0-9.9 0-7 7-25 25L312 192l-35.4 0-103-80zM338.5 240l43.5 0-9.4 26.4-34-26.4zM80 192l0-33L32 121.2 32 216l0 24 24 0 68 0L76 432 64 480l49.5 0L240 480l32-128 52.9 0-85.6-67.4L202.5 432l-77 0 48-192 9.3 0-60.9-48L80 192z" />
    </Icon>
);

export default GunSlash;