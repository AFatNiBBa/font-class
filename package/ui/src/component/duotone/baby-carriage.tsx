
import { Icon, generic } from "../../index";

/**
 * A component that renders the `baby-carriage` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baby-carriage?s=duotone baby-carriage}
 * @preview ![baby-carriage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/baby-carriage.svg)
 */
const BabyCarriage: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.1 192L256 192 138.9 22.9C133 14.4 123.6 9.5 114.1 9.5c-5.2 0-10.4 1.5-15.1 4.6C41.3 52.9 2.7 117.9 .1 192zM32 464a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm288 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M448 96c-35.3 0-64 28.7-64 64l0 64-160 0L0 224c0 25.2 5.8 50.2 17.1 73.5s27.8 44.5 48.6 62.3s45.5 32 72.7 41.6S194.6 416 224 416s58.5-5 85.7-14.6s51.9-23.8 72.7-41.6s37.3-39 48.6-62.3s17-48.3 17-73.5l0-64 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0z" />
    </Icon>
);

export default BabyCarriage;