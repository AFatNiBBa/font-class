
import { Icon } from "../../index";

/**
 * A component that renders the `telescope` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/telescope?s=sharp-thin telescope}
 * @preview ![telescope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/telescope.svg)
 */
const Telescope: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M334.8 82.1l112 194 104.3-60.2-112-194L334.8 82.1zM565 207.8l8 13.9-13.9 8L454.8 289.9l-13.9 8-8-13.9-8.5-14.7-41.4 22.4c.6 4 .9 8.1 .9 12.2c0 25.3-11.7 47.8-30 62.4L417.6 512l-17.5 0L340.4 375.3c-10.9 5.6-23.3 8.7-36.4 8.7s-25.5-3.2-36.4-8.7L207.8 512l-17.5 0L254 366.4c-1.2-1-2.4-2-3.5-3L122.1 432.8l-16.3-28.2L63.8 428.9l-13.9 8-8-13.9L8 364.3 0 350.5l13.9-8 42.1-24.3L36.7 284.9 326.9 100.5l-6-10.4-8-13.9 13.9-8L431.1 8 445 0l8 13.9 112 194zM63.9 332L21.9 356.3 55.8 415l42.1-24.3L63.9 332zm271-217.7L58.2 290.1l70 121.2 111.2-60.1C229.7 338 224 321.7 224 304c0-44.2 35.8-80 80-80c34.3 0 63.5 21.5 74.9 51.8l37.5-20.3L334.9 114.3zM304 368a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Telescope;