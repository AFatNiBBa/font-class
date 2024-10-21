
import { Icon } from "../../index";

/**
 * A component that renders the `charging-station` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/charging-station?s=thin charging-station}
 * @preview ![charging-station](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/charging-station.svg)
 */
const ChargingStation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 16C69.5 16 48 37.5 48 64l0 352 256 0 0-352c0-26.5-21.5-48-48-48L96 16zM48 432l0 64 256 0 0-64L48 432zM32 496L32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64l0 208 8 0c39.8 0 72 32.2 72 72l0 44c0 24.3 19.7 44 44 44s44-19.7 44-44l0-132.4c-40.4-4-72-38.1-72-79.6l0-24c0-13.3 10.7-24 24-24l8 0 0-56c0-4.4 3.6-8 8-8s8 3.6 8 8l0 56 64 0 0-56c0-4.4 3.6-8 8-8s8 3.6 8 8l0 56 8 0c13.3 0 24 10.7 24 24l0 24c0 41.5-31.6 75.6-72 79.6L504 388c0 33.1-26.9 60-60 60s-60-26.9-60-60l0-44c0-30.9-25.1-56-56-56l-8 0 0 208 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0-16 0L48 512l-16 0L8 512c-4.4 0-8-3.6-8-8s3.6-8 8-8l24 0zM536 144l-80 0-16 0c-4.4 0-8 3.6-8 8l0 24c0 35.3 28.7 64 64 64s64-28.7 64-64l0-24c0-4.4-3.6-8-8-8l-16 0zM196.8 105.6c3.5 2.7 4.3 7.7 1.6 11.2L136 200l96 0c3 0 5.8 1.7 7.2 4.4s1.1 6-.8 8.4l-72 96c-2.7 3.5-7.7 4.3-11.2 1.6s-4.3-7.7-1.6-11.2L216 216l-96 0c-3 0-5.8-1.7-7.2-4.4s-1.1-6 .8-8.4l72-96c2.7-3.5 7.7-4.3 11.2-1.6z" />
    </Icon>
);

export default ChargingStation;