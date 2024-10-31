
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pie` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pie?s=sharp-duotone-solid pie}
 * @preview ![pie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pie.svg)
 */
const Pie: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M47.1 301.2c19.4-9.2 38.7-18.4 58.1-27.6c2-1 4-1.9 6-2.9c2.1 .8 4.2 1.5 6.3 2.3c27.5 10 55 20 82.5 30c27.5-10 55-20 82.5-30c1.8-.7 3.6-1.3 5.5-2c1.8 .7 3.6 1.3 5.5 2c27.5 10 55 20 82.5 30c27.5-10 55-20 82.5-30c2.1-.8 4.2-1.5 6.3-2.3c2 1 4 1.9 6.1 2.9c19.3 9.2 38.7 18.4 58.1 27.6L480 448 96 448 47.1 301.2z" />
        <path d="M288 64C174.6 64 78.3 137.8 44.7 240L32 240 0 240l0 64 32 0 .5 0 8.7 0 63.9-30.4 6-2.9 6.3 2.3L200 303l82.5-30 5.5-2 5.5 2L376 303l82.5-30 6.3-2.3 6.1 2.9L534.8 304l8.7 0 .5 0 32 0 0-64-32 0-12.7 0C497.7 137.8 401.4 64 288 64zm-81.7 87.2l-16 32-7.2 14.3-28.6-14.3 7.2-14.3 16-32 7.2-14.3 28.6 14.3-7.2 14.3zm192-14.3l16 32 7.2 14.3-28.6 14.3-7.2-14.3-16-32-7.2-14.3 28.6-14.3 7.2 14.3zM304 144l0 32 0 16-32 0 0-16 0-32 0-16 32 0 0 16z" />
    </Icon>
);

export default Pie;