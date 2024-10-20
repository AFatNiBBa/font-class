
import { Icon } from "../../index";

/**
 * A component that renders the `left-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-right?s=regular left-right}
 * @preview ![left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/left-right.svg)
 */
const LeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M505.6 239.7c8.5 9.2 8.5 23.4 0 32.6l-89.4 96.8c-8.8 9.5-21.1 14.9-34 14.9c-25.5 0-46.3-20.7-46.3-46.3l0-9.7-160 0 0 9.7c0 25.5-20.7 46.3-46.3 46.3c-12.9 0-25.2-5.4-34-14.9L6.4 272.3c-8.5-9.2-8.5-23.4 0-32.6l89.4-96.8c8.8-9.5 21.1-14.9 34-14.9c25.5 0 46.3 20.7 46.3 46.3l0 9.7 160 0 0-9.7c0-25.5 20.7-46.3 46.3-46.3c12.9 0 25.2 5.4 34 14.9l89.4 96.8zM384 178.7l0 29.3c0 13.3-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24l0-29.3L56.7 256 128 333.3l0-29.3c0-13.3 10.7-24 24-24l208 0c13.3 0 24 10.7 24 24l0 29.3L455.3 256 384 178.7zm-253-3.3s0 0 0 0l-1.3-1.2 1.3 1.2s0 0 0 0z" />
    </Icon>
);

export default LeftRight;