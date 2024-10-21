
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fan-table` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fan-table?s=duotone fan-table}
 * @preview ![fan-table](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fan-table.svg)
 */
const FanTable: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 208c0 104 76.3 190.2 176 205.6l0 34.4 32 0 32 0 0-34.4C355.7 398.2 432 312 432 208C432 93.1 338.9 0 224 0S16 93.1 16 208zm99.4-33.8C97.2 129.1 119 77.9 164.1 59.7c2-.8 4-1.2 6-1.2c6.3 0 12.3 3.8 14.8 10c13.1 32.5 26.3 65 39.4 97.5c18.5-25.3 50-39.8 83.3-35.1c48.1 6.8 81.7 51.3 74.9 99.4c-1.2 8.8-9.3 14.8-18.1 13.6c-34.7-4.9-69.4-9.8-104.2-14.6c12.6 28.7 9.5 63.2-11.2 89.7c-29.9 38.3-85.2 45.1-123.5 15.2c-7-5.4-8.2-15.5-2.8-22.5c21.6-27.6 43.2-55.3 64.8-82.9c-31.2-3.4-59.5-23.4-72.1-54.5z" />
        <path d="M184.9 68.5L224.3 166c18.5-25.3 50-39.8 83.3-35.1c48.1 6.8 81.7 51.3 74.9 99.4c-1.2 8.8-9.3 14.8-18.1 13.6L260.2 229.2c12.6 28.7 9.5 63.2-11.2 89.7c-29.9 38.3-85.2 45.1-123.5 15.2c-7-5.4-8.2-15.5-2.8-22.5l64.8-82.9c-31.2-3.4-59.5-23.4-72.1-54.5C97.2 129.1 119 77.9 164.1 59.7c8.2-3.3 17.5 .6 20.8 8.8zM240 208a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM96 448l128 0 128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0L96 512c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default FanTable;