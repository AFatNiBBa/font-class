
import { Icon } from "../../index";

/**
 * A component that renders the `inbox` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox?s=light inbox}
 * @preview ![inbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/inbox.svg)
 */
const Inbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 416l0-88.1c0-2.6 .3-5.2 1-7.8l0-.1 101.1 0 23.2 46.3c5.4 10.8 16.5 17.7 28.6 17.7l140.2 0c12.1 0 23.2-6.8 28.6-17.7L377.9 320 479 320l0 .1c.6 2.5 1 5.1 1 7.8l0 88.1c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32zM471 288l-93.1 0c-12.1 0-23.2 6.8-28.6 17.7L326.1 352l-140.2 0-23.2-46.3c-5.4-10.8-16.5-17.7-28.6-17.7L41 288 90.9 88.2C94.5 74 107.3 64 122 64L390 64c14.7 0 27.5 10 31 24.2L471 288zM0 327.9L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-88.1c0-5.2-.6-10.4-1.9-15.5l-58-231.9C445 52 419.4 32 390 32L122 32C92.6 32 67 52 59.9 80.5L1.9 312.4C.6 317.4 0 322.6 0 327.9z" />
    </Icon>
);

export default Inbox;