
import { Icon } from "../../index";

/**
 * A component that renders the `mitten` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mitten?s=sharp-thin mitten}
 * @preview ![mitten](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mitten.svg)
 */
const Mitten: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 136C0 60.9 60.9 0 136 0l16.3 0c60.3 0 113.3 39.7 130.4 97.5l33.3 112.8 21.3-30.8 4.7-6.8 6.6 4.9 92.8 68.8 6.2 4.6-4.4 6.4L367.6 368l-19.4 0 77.6-113.4-80-59.3-26.1 37.8-9.5 13.7-4.7-16L267.4 102c-15.1-51-61.9-86-115.1-86L136 16C69.7 16 16 69.7 16 136l0 8.2c0 9.8 1.2 19.6 3.6 29.1L68.2 368l-16.5 0L4.1 177.2C1.4 166.4 0 155.4 0 144.2L0 136zM48 416l0 80 320 0 0-80L48 416zM32 400l16 0 320 0 16 0 0 16 0 80 0 16-16 0L48 512l-16 0 0-16 0-80 0-16z" />
    </Icon>
);

export default Mitten;