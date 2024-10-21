
import { Icon } from "../../index";

/**
 * A component that renders the `star` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star?s=sharp-regular star}
 * @preview ![star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/star.svg)
 */
const Star: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M374.6 164L315.2 51.4 288.1 0 260.9 51.4 201.5 164 76.2 185.7l-57.3 9.9 40.5 41.7 88.7 91.2L130 454.4 121.7 512l52.2-25.7 114.2-56.1 114.2 56.1L454.4 512l-8.3-57.6L428 328.5l88.7-91.2 40.5-41.7-57.3-9.9L374.6 164zm84.8 63.4l-65.8 67.7L377.2 312l3.4 23.4L394 428.8l-84.7-41.7-21.2-10.4-21.2 10.4-84.7 41.7 13.4-93.4L199 312l-16.4-16.9-65.8-67.7 93-16.1 23.3-4 11-20.9 44.1-83.5 44.1 83.5 11 20.9 23.3 4 93 16.1z" />
    </Icon>
);

export default Star;