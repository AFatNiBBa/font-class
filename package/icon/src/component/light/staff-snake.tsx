
import { Icon } from "../../index";

/**
 * A component that renders the `staff-snake` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/staff-snake?s=light staff-snake}
 * @preview ![staff-snake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/staff-snake.svg)
 */
const StaffSnake: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M296 48l-88 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-56 0L64 48C28.7 48 0 76.7 0 112s28.7 64 64 64l8 0c39.8 0 72-32.2 72-72l0-24 32 0 0 112 0 32 0 64-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-32-16 0c-35.3 0-64 28.7-64 64s28.7 64 64 64l48 0 0 96-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0 0 2.7 0 45.3c0 8.8 7.2 16 16 16s16-7.2 16-16l0-45.3 0-2.7 0-32 0-96 32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l0 32c44.2 0 80-35.8 80-80s-35.8-80-80-80l-32 0 0-64 0-32 0-112 88 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-56 0 0 32 56 0c48.6 0 88-39.4 88-88s-39.4-88-88-88zM112 80l0 24c0 22.1-17.9 40-40 40l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0zM72 120a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default StaffSnake;