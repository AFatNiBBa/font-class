
import { Icon } from "../../index";

/**
 * A component that renders the `telescope` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/telescope?s=sharp-light telescope}
 * @preview ![telescope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/telescope.svg)
 */
const Telescope: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M356.6 88l96 166.3L529.3 210l-96-166.3L356.6 88zM557 194l16 27.7-27.7 16-76.6 44.2-27.7 16-16-27.7-.5-.8-41.4 22.4c.6 4 .9 8.1 .9 12.2c0 23.2-9.9 44.2-25.7 58.8L419.1 512l-34.6 0-54-132.5c-8.3 2.9-17.2 4.5-26.5 4.5s-18.2-1.6-26.5-4.5L223.5 512l-34.6 0 60.2-147.8-127 68.7-85.4-148L326.9 100.5l-14-24.2 27.7-16L417.3 16 445 0l16 27.7L557 194zm-214-65.8L79.8 295.4l54.5 94.5 97-52.4c-4.7-10.2-7.3-21.5-7.3-33.4c0-44.2 35.8-80 80-80c28.6 0 53.6 15 67.8 37.5l36.6-19.8L342.9 128.2zM304 352a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM37.9 344.1l32 56L77.8 414 50 429.8l-7.9-13.9-32-56L2.2 346 30 330.2l7.9 13.9z" />
    </Icon>
);

export default Telescope;