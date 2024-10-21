
import { Icon } from "../../index";

/**
 * A component that renders the `up-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down?s=regular up-down}
 * @preview ![up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/up-down.svg)
 */
const UpDown: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M111.7 6.4c9.2-8.5 23.4-8.5 32.6 0l96.8 89.4c9.5 8.8 14.9 21.1 14.9 34c0 25.5-20.7 46.3-46.3 46.3l-9.7 0 0 160 9.7 0c25.5 0 46.3 20.7 46.3 46.3c0 12.9-5.4 25.2-14.9 34l-96.8 89.4c-9.2 8.5-23.4 8.5-32.6 0L14.9 416.2C5.4 407.5 0 395.2 0 382.3C0 356.7 20.7 336 46.3 336l9.7 0 0-160-9.7 0C20.7 176 0 155.3 0 129.7c0-12.9 5.4-25.2 14.9-34L111.7 6.4zM50.7 128L80 128c13.3 0 24 10.7 24 24l0 208c0 13.3-10.7 24-24 24l-29.3 0L128 455.3 205.3 384 176 384c-13.3 0-24-10.7-24-24l0-208c0-13.3 10.7-24 24-24l29.3 0L128 56.7 50.7 128zM47.4 381s0 0 0 0l-1.2 1.3 1.2-1.3s0 0 0 0z" />
    </Icon>
);

export default UpDown;