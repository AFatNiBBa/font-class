
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hands-bound` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-bound?s=duotone hands-bound}
 * @preview ![hands-bound](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hands-bound.svg)
 */
const HandsBound: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 32l0 64 0 59.1 0 .7L32 192l0 21.9c0 14.2 5.1 27.9 14.3 38.7L131.6 352 288 352l0-32 0-61.9c0-24.6-9-48.4-25.4-66.8l-46.7-52.5c-11.5-13-31.3-14.4-44.5-3.2s-15.2 30.9-4.4 44.5l27.6 34.5c7 8.8 4.7 21.8-5.1 27.5c-8.1 4.8-18.6 2.7-24.2-4.8L96 144.8 96 96l0-64C96 14.3 81.7 0 64 0S32 14.3 32 32zM160 480l0 32 128 0 0-32-128 0zM352 258.1l0 61.9 0 32 156.4 0 85.3-99.5c9.2-10.8 14.3-24.5 14.3-38.7l0-21.9 0-36.2 0-.7L608 96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64 0 48.8-69.3 92.4c-5.7 7.6-16.1 9.6-24.2 4.8c-9.7-5.7-12.1-18.7-5.1-27.5L473 180c10.8-13.5 8.9-33.3-4.4-44.5s-33-9.8-44.5 3.2l-46.7 52.5C361 209.7 352 233.4 352 258.1zM352 480l0 32 128 0 0-32-128 0z" />
        <path d="M128 352c-13.3 0-24 10.7-24 24s10.7 24 24 24l384 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-384 0zm0 80c-13.3 0-24 10.7-24 24s10.7 24 24 24l384 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-384 0z" />
    </Icon>
);

export default HandsBound;