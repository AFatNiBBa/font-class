
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scissors` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scissors?s=duotone scissors}
 * @preview ![scissors](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/scissors.svg)
 */
const Scissors: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 112c0 61.9 50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256c21.3-21.3 42.7-42.7 64-64l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112zm160 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm96 208L396.8 460.8C410.9 474.9 429.5 482 448 482s37.1-7.1 51.2-21.2c3.5-3.5 5.3-8.2 5.3-12.8s-1.8-9.3-5.3-12.8L320 256l-64 64z" />
        <path d="M216.5 359.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L152.5 295.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5zM64 400a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default Scissors;