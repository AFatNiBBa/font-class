
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-half-stroke` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half-stroke?s=duotone heart-half-stroke}
 * @preview ![heart-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/heart-half-stroke.svg)
 */
const HeartHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 96l0 67.9 0 22.6 45.3-45.3 12-12c18-18 43.6-26.2 68.8-22c38.1 6.3 66 39.3 66 77.9l0 5.8c0 23.8-9.9 46.5-27.3 62.7L256 407.4l0 21.9 0 50.7c10.3 0 20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5l0-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96z" />
        <path d="M256 96L244 84s0 0 0 0c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1l0 5.8c0 41.5 17.2 81.2 47.6 109.5L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9l0-50.7 0-265.4L256 96z" />
    </Icon>
);

export default HeartHalfStroke;