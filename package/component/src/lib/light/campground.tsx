
import { Icon } from "../../index";

/**
 * A component that renders the `campground` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/campground?s=light campground}
 * @preview ![campground](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/campground.svg)
 */
const Campground: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M394.3 3.7c6.8 5.7 7.7 15.8 2 22.5L308.9 130.4 532.8 397.2C540 405.8 544 416.7 544 428l0 36c0 26.5-21.5 48-48 48l-208 0L80 512c-26.5 0-48-21.5-48-48l0-36c0-11.3 4-22.2 11.2-30.9L267.1 130.4 179.7 26.3c-5.7-6.8-4.8-16.9 2-22.5s16.9-4.8 22.5 2L288 105.5 371.7 5.7c5.7-6.8 15.8-7.7 22.5-2zM67.7 417.7c-2.4 2.9-3.7 6.5-3.7 10.3l0 36c0 8.8 7.2 16 16 16l49.9 0 1.5-1.9 144-184c3-3.9 7.7-6.1 12.6-6.1s9.6 2.3 12.6 6.1l144 184 1.5 1.9 49.9 0c8.8 0 16-7.2 16-16l0-36c0-3.8-1.3-7.4-3.7-10.3L288 155.3 67.7 417.7zM170.6 480L288 480l117.4 0L288 330 170.6 480z" />
    </Icon>
);

export default Campground;