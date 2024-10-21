
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sushi` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sushi?s=duotone sushi}
 * @preview ![sushi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sushi.svg)
 */
const Sushi: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 369l0 15c0 35.3 28.7 64 64 64c19.1 0 36.3-8.4 48-21.7c11.7 13.3 28.9 21.7 48 21.7s36.3-8.4 48-21.7c11.7 13.3 28.9 21.7 48 21.7s36.3-8.4 48-21.7c11.7 13.3 28.9 21.7 48 21.7s36.3-8.4 48-21.7c11.7 13.3 28.9 21.7 48 21.7c35.3 0 64-28.7 64-64l0-14.3c-8.3 .7-16.9-.3-25.5-3.1L313 298.4c-20-6.7-41.7-6.5-61.7 .4l-193 66.9c-8.9 3.1-17.8 4.1-26.4 3.4z" />
        <path d="M405.9 295.5L506.3 125.6c24.8 26.7 42.1 60.7 48.5 98.8l12.5 75.2c4 23.8-18.8 43.2-41.7 35.6L405.9 295.5zm76.2-191.9L374.8 285.2 323.1 268c-14.6-4.9-29.9-7-45.2-6.4L393.5 66.1c32.9 4.8 63.2 18 88.7 37.5zM246.6 64l110.9 0L235.6 270.4 96.1 318.7 246.6 64zm-37.2 0L49.4 334.8C27 341.5 5 322.3 8.9 298.9l12.4-74.4C36.6 132.2 116.1 64.6 209.5 64z" />
    </Icon>
);

export default Sushi;