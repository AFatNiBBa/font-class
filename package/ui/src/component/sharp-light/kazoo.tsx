
import { Icon } from "../../index";

/**
 * A component that renders the `kazoo` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kazoo?s=sharp-light kazoo}
 * @preview ![kazoo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/kazoo.svg)
 */
const Kazoo: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256c23.8 0 46.3-5.8 66-16l126 0 32 0 0-32 0-192 0-32-32 0-126 0c-19.8-10.2-42.2-16-66-16s-46.3 5.8-66 16l-126 0L0 192 0 320l224 64 126 0c19.8 10.2 42.2 16 66 16zm106.6-47.2c.2-.3 .5-.5 .7-.8l-.7 .8zm.7-.8c22.8-25.5 36.7-59.1 36.7-96s-13.9-70.5-36.7-96c0 0 0 0 0 0l84.7 0 0 192-84.7 0zM228.5 160l80.2 0c-22.8 25.5-36.7 59.1-36.7 96s13.9 70.5 36.7 96l-80.2 0L32 295.9l0-79.7L228.5 160zm158.8 44.7L376 193.4 353.4 216l11.3 11.3L393.4 256l-28.7 28.7L353.4 296 376 318.6l11.3-11.3L416 278.6l28.7 28.7L456 318.6 478.6 296l-11.3-11.3L438.6 256l28.7-28.7L478.6 216 456 193.4l-11.3 11.3L416 233.4l-28.7-28.7z" />
    </Icon>
);

export default Kazoo;