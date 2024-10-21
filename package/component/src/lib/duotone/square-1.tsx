
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-1` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-1?s=duotone square-1}
 * @preview ![square-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-1.svg)
 */
const Square_1: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM136 360c0 13.3 10.7 24 24 24l64 0 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-184c0-8.6-4.6-16.5-12-20.8c-3.7-2.2-7.9-3.2-12-3.2c-4.1 0-8.2 1.1-11.9 3.2l-56 32c-11.5 6.6-15.5 21.2-8.9 32.7s21.2 15.5 32.7 8.9L200 193.4 200 336l-40 0c-13.3 0-24 10.7-24 24z" />
        <path d="M248 152c0-8.6-4.6-16.5-12-20.8s-16.5-4.3-24-.1l-56 32c-11.5 6.6-15.5 21.2-8.9 32.7s21.2 15.5 32.7 8.9L200 193.4 200 336l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-184z" />
    </Icon>
);

export default Square_1;