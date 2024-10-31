
import { Icon } from "../../index";

/**
 * A component that renders the `web-awesome` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/web-awesome?s=sharp-regular web-awesome}
 * @preview ![web-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/web-awesome.svg)
 */
const WebAwesome: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M372.2 52c0 20.9-12.4 39-30.2 47.2L448 192l102.2-20.4 2.2-.4c-5.3-7.7-8.4-17.1-8.4-27.1c0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48l-9.8 21.8L464 480l-288 0L56.2 213.8 46.4 192C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1l2.2 .4L192 192 298.1 99.1c-17.7-8.3-30-26.3-30-47.1c0-28.7 23.3-52 52-52s52 23.3 52 52zm44.2 176.1L320 143.8l-96.4 84.3-17.8 15.6-23.2-4.6L114 225.4 207 432 433 432l93-206.6-68.5 13.7-23.2 4.6-17.8-15.6z" />
    </Icon>
);

export default WebAwesome;