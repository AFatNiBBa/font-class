
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-smile-wink` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-wink?s=sharp-duotone-solid face-smile-wink}
 * @preview ![face-smile-wink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-smile-wink.svg)
 */
const FaceSmileWink: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm129.7 71.2l28.6-14.3c8.7 17.5 41.3 55.2 97.7 55.2s88.9-37.7 97.7-55.2l28.6 14.3C369.7 352.3 327.6 400 256 400s-113.7-47.7-126.3-72.8zM144.4 208c0-17.7 14.3-32 32-32c8.8 0 16.8 3.6 22.6 9.4c2.9 2.9 5.2 6.3 6.9 10.2c.8 1.9 1.4 3.9 1.9 6c.2 1 .4 2.1 .5 3.2c.1 .5 .1 1.1 .1 1.6s0 1 0 1.8c0 .5 0 1 0 1.5s-.1 1.1-.1 1.6c-.1 1.1-.3 2.1-.5 3.2c-.4 2.1-1.1 4.1-1.9 6c-1.6 3.8-4 7.3-6.9 10.2c-5.8 5.8-13.8 9.4-22.6 9.4c-17.7 0-32-14.3-32-32zm122.8 10.4c34.4-45.9 103.2-45.9 137.6 0l-25.6 19.2c-21.6-28.8-64.8-28.8-86.4 0c-8.5-6.4-17.1-12.8-25.6-19.2z" />
        <path d="M176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm116.4-2.4c21.6-28.8 64.8-28.8 86.4 0l25.6-19.2c-34.4-45.9-103.2-45.9-137.6 0l25.6 19.2z" />
    </Icon>
);

export default FaceSmileWink;