
import { Icon } from "../../index";

/**
 * A component that renders the `360-degrees` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/360-degrees?s=sharp-solid 360-degrees}
 * @preview ![360-degrees](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/360-degrees.svg)
 */
const $360Degrees: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM305.7 67.4L320 96c-14.3-28.6-14.3-28.6-14.3-28.6s0 0 0 0c0 0 0 0-.1 0l-.1 .1-.3 .2-.9 .5c-.7 .4-1.7 .9-2.8 1.6c-2.3 1.3-5.4 3.2-9.1 5.7c-7.3 4.9-17 12.2-26.9 22C245.9 116.9 224 148.5 224 192l0 96 0 32s0 0 0 0l0 48c0 44.2 35.8 80 80 80s80-35.8 80-80l0-96c0-44.2-35.8-80-80-80c-5.5 0-10.8 .6-16 1.6l0-1.6c0-20.5 10.1-36.9 22.6-49.4c6.2-6.2 12.4-10.9 17.1-14c2.3-1.5 4.2-2.7 5.4-3.3c.6-.3 1-.6 1.2-.7l.1-.1 28.5-14.2L334.3 53.1 305.7 67.4zM32 64L0 64l0 64 32 0 65.3 0L39.7 195.2l-7.7 9L32 216l0 8 0 32 32 0 16 0c26.5 0 48 21.5 48 48l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 352c0 53 43 96 96 96s96-43 96-96l0-48c0-47.6-29.8-88.3-71.7-104.5l64-74.6 7.7-9 0-11.8 0-8 0-32-32 0L32 64zm448 80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224zm16-80c-44.2 0-80 35.8-80 80l0 224c0 44.2 35.8 80 80 80s80-35.8 80-80l0-224c0-44.2-35.8-80-80-80zM288 272c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96z" />
    </Icon>
);

export default $360Degrees;