
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-empty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-empty?s=thin temperature-empty}
 * @preview ![temperature-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/temperature-empty.svg)
 */
const TemperatureEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M96 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 163.7c0 8.4 4.4 15.7 10.7 20.3C267 287.3 288 325.2 288 368c0 70.7-57.3 128-128 128S32 438.7 32 368c0-42.8 21-80.7 53.3-104c6.3-4.6 10.7-11.9 10.7-20.3L96 80zM160 0C115.8 0 80 35.8 80 80l0 163.7c0 2.7-1.4 5.4-4 7.3c-36.3 26.1-60 68.8-60 117c0 79.5 64.5 144 144 144s144-64.5 144-144c0-48.2-23.7-90.8-60-117c-2.6-1.9-4-4.6-4-7.3L240 80c0-44.2-35.8-80-80-80zM112 368a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0A64 64 0 1 0 96 368a64 64 0 1 0 128 0z" />
    </Icon>
);

export default TemperatureEmpty;