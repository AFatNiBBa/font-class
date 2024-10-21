
import { Icon } from "../../index";

/**
 * A component that renders the `snowman-head` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowman-head?s=sharp-light snowman-head}
 * @preview ![snowman-head](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/snowman-head.svg)
 */
const SnowmanHead: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 32l0 128 32 0 0-128 0-32L352 0 96 0 64 0l0 32 0 128 32 0L96 32l256 0zm.7 192c29.3 31.4 47.3 73.6 47.3 120c0 54.8-25 103.7-64.3 136l-223.4 0C73 447.7 48 398.8 48 344c0-46.4 17.9-88.6 47.3-120l.7 0 256 0 .7 0zm41.2 0l38.1 0 16 0 0-32-16 0-48 0-32 0L96 192l-32 0-48 0L0 192l0 32 16 0 38.1 0C30.1 257.9 16 299.3 16 344c0 69 33.6 130.2 85.3 168l245.3 0c51.7-37.8 85.3-99 85.3-168c0-44.7-14.1-86.1-38.1-120zM168 304a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm136 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM176 367.6c0 8.3 2.2 16.4 6.3 23.6l27.8 48.7L224 464.2l13.9-24.3 27.8-48.7c4.1-7.2 6.3-15.3 6.3-23.6c0-26.3-21.3-47.6-47.6-47.6l-.8 0c-26.3 0-47.6 21.3-47.6 47.6zM223.6 352l.8 0c8.6 0 15.6 7 15.6 15.6c0 2.7-.7 5.4-2.1 7.7L224 399.8l-13.9-24.4c-1.3-2.4-2.1-5-2.1-7.7c0-8.6 7-15.6 15.6-15.6z" />
    </Icon>
);

export default SnowmanHead;