
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fan-table` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fan-table?s=sharp-duotone-solid fan-table}
 * @preview ![fan-table](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fan-table.svg)
 */
const FanTable: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 208c0 104 76.3 190.2 176 205.6l0 34.4 32 0 32 0 0-34.4C355.7 398.2 432 312 432 208C432 93.1 338.9 0 224 0S16 93.1 16 208zm96.9 116.2c24.9-31.8 49.7-63.7 74.6-95.5c-31.2-3.4-59.5-23.4-72.1-54.5C97.2 129.1 119 77.9 164.1 59.7c4.9-2 9.9-4 14.8-6C194 91.1 209.2 128.6 224.3 166c18.5-25.3 50-39.8 83.3-35.1c48.1 6.8 81.7 51.3 74.9 99.4c-.7 5.3-1.5 10.6-2.2 15.8l-120-16.9c12.6 28.7 9.5 63.2-11.2 89.7c-29.9 38.3-85.2 45.1-123.5 15.2l-12.6-9.8z" />
        <path d="M178.9 53.7L224.3 166c18.5-25.3 50-39.8 83.3-35.1c48.1 6.8 81.7 51.3 74.9 99.4l-2.2 15.8-120-16.9c12.6 28.7 9.5 63.2-11.2 89.7c-29.9 38.3-85.2 45.1-123.5 15.2l-12.6-9.8 74.6-95.5c-31.2-3.4-59.5-23.4-72.1-54.5C97.2 129.1 119 77.9 164.1 59.7l14.8-6zM240 208a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM96 448l128 0 128 0 32 0 0 64-32 0-128 0L96 512l-32 0 0-64 32 0z" />
    </Icon>
);

export default FanTable;