
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-empty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-empty?s=sharp-light temperature-empty}
 * @preview ![temperature-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/temperature-empty.svg)
 */
const TemperatureEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M85.3 284.5L96 275l0-14.3L96 32l128 0 0 228.7 0 14.3 10.7 9.5c23 20.6 37.3 50.3 37.3 83.5c0 61.9-50.1 112-112 112S48 429.9 48 368c0-33.2 14.4-62.9 37.3-83.5zM256 0L224 0 96 0 64 0l0 32 0 228.7C34.5 287.1 16 325.4 16 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-42.6-18.5-81-48-107.3L256 32l0-32zM128 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0A64 64 0 1 0 96 368a64 64 0 1 0 128 0z" />
    </Icon>
);

export default TemperatureEmpty;