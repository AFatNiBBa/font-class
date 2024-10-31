
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sun-haze` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-haze?s=duotone sun-haze}
 * @preview ![sun-haze](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sun-haze.svg)
 */
const SunHaze: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 156.6c0 3.2 1 6.4 2.8 9.1L129.1 256l62.9 0c0-70.7 57.3-128 128-128s128 57.3 128 128l62.9 0 62.3-90.3c1.9-2.7 2.8-5.9 2.8-9.1c0-2.1-.4-4.2-1.2-6.1c-2.1-5-6.6-8.6-11.9-9.6L455 121 435.1 13.1c-1-5.3-4.6-9.8-9.6-11.9c-2-.8-4-1.2-6.1-1.2c-3.2 0-6.4 1-9.1 2.8L320 65.1 229.7 2.8c-4.5-3.1-10.2-3.7-15.2-1.6s-8.6 6.6-9.6 11.9L185 121 77.1 140.9c-5.3 1-9.8 4.6-11.9 9.6c-.8 2-1.2 4.1-1.2 6.1zM224 256l192 0c0-53-43-96-96-96s-96 43-96 96z" />
        <path d="M640 312c0-13.3-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24zm-208 0c0-13.3-10.7-24-24-24L88 288c-13.3 0-24 10.7-24 24s10.7 24 24 24l320 0c13.3 0 24-10.7 24-24zm144 88c0-13.3-10.7-24-24-24L24 376c-13.3 0-24 10.7-24 24s10.7 24 24 24l528 0c13.3 0 24-10.7 24-24zM88 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 464zm208 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0z" />
    </Icon>
);

export default SunHaze;