
import { Icon } from "../../index";

/**
 * A component that renders the `flashlight` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flashlight?s=regular flashlight}
 * @preview ![flashlight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/flashlight.svg)
 */
const Flashlight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 304L48 304l0-96 336 0c11.6 0 22.9-4.2 31.7-11.9l.1-.1c.2-.2 .7-.6 1.4-1.2c1.5-1.2 3.9-3.1 7.4-5.4c6.9-4.8 17.5-11.4 31.4-18.2c15-7.3 33.9-14.6 56.1-19.8l0 209.3c-22.2-5.2-41-12.5-56.1-19.8c-14-6.8-24.5-13.4-31.4-18.2c-3.4-2.4-5.9-4.3-7.4-5.4c-.7-.6-1.2-1-1.4-1.2l-.1-.1c-8.8-7.7-20-11.9-31.6-11.9zm192 64c-5.5 0-10.8-.2-16-.4l0-223.1c5.2-.3 10.5-.4 16-.4l16 0 0 224-16 0zM384 160L48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l336 0s72 64 192 64l32 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-32 0c-120 0-192 64-192 64zM248 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0z" />
    </Icon>
);

export default Flashlight;