
import { Icon, generic } from "../../index";

/**
 * A component that renders the `peace` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peace?s=duotone peace}
 * @preview ![peace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/peace.svg)
 */
const Peace: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M89.2 351.1c10.7 18.7 24.4 35.4 40.6 49.5L224 323.5l0 121.8c10.4 1.7 21.1 2.7 32 2.7s21.6-.9 32-2.7l0-121.8 94.3 77.1c16.1-14.1 29.9-30.8 40.6-49.5L288 240.8l0-174.2c-10.4-1.7-21.1-2.7-32-2.7s-21.6 .9-32 2.7l0 174.2L89.2 351.1z" />
        <path d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default Peace;