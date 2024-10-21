
import { Icon } from "../../index";

/**
 * A component that renders the `snake` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snake?s=sharp-light snake}
 * @preview ![snake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/snake.svg)
 */
const Snake: typeof Icon = x => (
    <Icon {...x}>
        <path d="M389.8 214.3L512 160l0-96L368 0 270 56l-90 0C98.3 56 32 122.3 32 204s66.3 148 148 148l164 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-56 0L96 400 31.8 437.5 0 456l31.8 18.5L96 512l79.9 0 .1 0 168 0c75.1 0 136-60.9 136-136c0-58.4-36.8-108.2-88.4-127.5c-4.8-1.8-9.7-3.3-14.7-4.5c-6-1.5-12.2-2.6-18.5-3.2c-4.7-.5-9.6-.8-14.4-.8l-12.5 0L180 240c-19.9 0-36-16.1-36-36s16.1-36 36-36l90 0 70 40 4 2.3L368 224l21.8-9.7zm-20-26.1l-83.9-48-7.4-4.2-8.5 0-90 0c-37.6 0-68 30.4-68 68s30.4 68 68 68l164 0c57.4 0 104 46.6 104 104s-46.6 104-104 104l-168 0c0 0 0 0 0 0c0 0-.1 0-.1 0c0 0 0 0 0 0l-71.2 0L63.5 456l41.1-24L288 432l56 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-164 0c-64.1 0-116-51.9-116-116s51.9-116 116-116l90 0 8.5 0 7.4-4.2 83.9-48L480 84.8l0 54.4-110.2 49zM384 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Snake;