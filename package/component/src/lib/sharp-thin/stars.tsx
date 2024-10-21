
import { Icon } from "../../index";

/**
 * A component that renders the `stars` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stars?s=sharp-thin stars}
 * @preview ![stars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/stars.svg)
 */
const Stars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 0l0 8 0 64 64 0 8 0 0 16-8 0-64 0 0 64 0 8-16 0 0-8 0-64-64 0-8 0 0-16 8 0 64 0 0-64 0-8 16 0zM464 152l0 8 0 48 48 0 8 0 0 16-8 0-48 0 0 48 0 8-16 0 0-8 0-48-48 0-8 0 0-16 8 0 48 0 0-48 0-8 16 0zM202.4 162.1l50.9 103.1L367 281.7l19.9 2.9-14.4 14.1-82.3 80.2 19.4 113.3L313 512l-17.8-9.4L193.5 449.1 91.7 502.6 73.9 512l3.4-19.9L96.7 378.9 14.4 298.6 0 284.6l19.9-2.9 113.7-16.5 50.9-103.1 8.9-18.1 8.9 18.1zM251 281l-8.3-1.2-3.7-7.5-45.4-92.1L148 272.2l-3.7 7.5L136 281 34.4 295.7l73.5 71.7 6 5.9-1.4 8.3L95.1 482.8 186 435l7.4-3.9 7.4 3.9 90.9 47.8L274.4 381.6l-1.4-8.3 6-5.9 73.5-71.7L251 281z" />
    </Icon>
);

export default Stars;