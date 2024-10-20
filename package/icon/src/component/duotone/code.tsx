
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code?s=duotone code}
 * @preview ![code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/code.svg)
 */
const Code: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M225.2 471.2c-4.9 17 5 34.7 22 39.6c2.9 .8 5.9 1.2 8.8 1.2c13.9 0 26.7-9.2 30.7-23.2l128-448c.8-2.9 1.2-5.9 1.2-8.8c0-13.9-9.2-26.7-23.2-30.8c-17-4.9-34.7 5-39.6 22l-128 448z" />
        <path d="M473.4 121.4c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
    </Icon>
);

export default Code;