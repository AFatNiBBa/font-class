
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bullseye-arrow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye-arrow?s=duotone bullseye-arrow}
 * @preview ![bullseye-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bullseye-arrow.svg)
 */
const BullseyeArrow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256c0-29.6-5-58-14.3-84.5l-43.1 43.1-9.3 9.3c1.8 10.4 2.7 21.1 2.7 32.1c0 106-86 192-192 192S64 362 64 256S150 64 256 64c10.9 0 21.6 .9 32.1 2.7l9.3-9.3 43.1-43.1C314 5 285.6 0 256 0C114.6 0 0 114.6 0 256zm112 0c0 79.5 64.5 144 144 144s144-64.5 144-144c0-13.1-1.7-25.7-5-37.7l-28.6-4.8-31.2 31.2c.5 3.7 .8 7.5 .8 11.3c0 44.2-35.8 80-80 80s-80-35.8-80-80s35.8-80 80-80c3.8 0 7.6 .3 11.3 .8l31.2-31.2L293.7 117c-12-3.3-24.7-5-37.7-5c-79.5 0-144 64.5-144 144z" />
        <path d="M331.2 146.9l-8.4-50.7c-1.7-10.2 1.6-20.6 8.9-27.9l51.2-51.2C391 9 404.7 11.9 409 22.5L432 80l57.5 23c10.7 4.3 13.5 18 5.4 26.2l-51.2 51.2c-7.3 7.3-17.7 10.6-27.9 8.9l-50.7-8.4L273 273c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l92.1-92.1z" />
    </Icon>
);

export default BullseyeArrow;