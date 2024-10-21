
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet?s=duotone toilet}
 * @preview ![toilet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/toilet.svg)
 */
const Toilet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 24C0 37.3 10.7 48 24 48l8 0 384 0 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 0C10.7 0 0 10.7 0 24zM96 96c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
        <path d="M416 196.9c1.9 1.4 3.8 2.9 5.6 4.4C437.1 214.5 448 232.9 448 256c0 46.9-14.3 84.1-37 112.5c-14.2 17.7-31.1 31.3-48.5 41.8l19.8 59.5c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3L96 512c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l19.8-59.5C68.1 399.8 51.2 386.2 37 368.5C14.3 340.1 0 302.9 0 256c0-23.1 10.9-41.5 26.4-54.6c1.8-1.5 3.7-3 5.6-4.4L32 48l384 0 0 148.9zM384 256c0 0 0-.1 0-.1c0-1 0-2.5-3.8-5.8c-4.8-4.1-14-9-29.3-13.4C320.5 228 276.1 224 224 224s-96.5 4-126.9 12.8c-15.3 4.4-24.5 9.3-29.3 13.4C64 253.4 64 255 64 255.9c0 0 0 .1 0 .1l0 .3c0 1 .3 2.6 3.8 5.6c4.8 4.1 14 9 29.3 13.4C127.5 284 171.9 288 224 288s96.5-4 126.9-12.8c15.3-4.4 24.5-9.3 29.3-13.4c3.5-3 3.8-4.6 3.8-5.6l0-.3zM112 80c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0z" />
    </Icon>
);

export default Toilet;