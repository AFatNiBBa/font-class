
import { Icon } from "../../index";

/**
 * A component that renders the `staff-snake` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/staff-snake?s=sharp-light staff-snake}
 * @preview ![staff-snake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/staff-snake.svg)
 */
const StaffSnake: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M208 0L176 0l0 48-56 0L88 48 72 48l-8 0C28.7 48 0 76.7 0 112l0 32 0 32 32 0 48 0c35.3 0 64-28.7 64-64l0-32 32 0 0 112 0 32 0 64-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-32-16 0c-35.3 0-64 28.7-64 64s28.7 64 64 64l48 0 0 96-64 0-16 0 0 32 16 0 64 0 0 64 32 0 0-64 0-32 0-96 32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l0 32c44.2 0 80-35.8 80-80s-35.8-80-80-80l-32 0 0-64 0-32 0-112 88 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-56 0 0 32 56 0c48.6 0 88-39.4 88-88s-39.4-88-88-88l-88 0 0-48zM112 80l0 32c0 17.7-14.3 32-32 32l-48 0 0-32c0-17.7 14.3-32 32-32l8 0 16 0 24 0zM72 120a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default StaffSnake;