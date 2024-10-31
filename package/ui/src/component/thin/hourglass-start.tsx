
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-start` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-start?s=thin hourglass-start}
 * @preview ![hourglass-start](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/hourglass-start.svg)
 */
const HourglassStart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 8C0 3.6 3.6 0 8 0L376 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0 0 55.2c0 48.3-23 93.7-61.8 122.4L205.5 256l84.7 62.4C329 347 352 392.5 352 440.8l0 55.2 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 512c-4.4 0-8-3.6-8-8s3.6-8 8-8l24 0 0-55.2c0-48.3 23-93.7 61.8-122.4L178.5 256 93.8 193.6C55 165 32 119.5 32 71.2L32 16 8 16c-4.4 0-8-3.6-8-8zm48 8l0 48 288 0 0-48L48 16zm.3 64c2.6 39.9 22.6 76.8 55 100.7L192 246.1l88.7-65.3c32.4-23.9 52.5-60.8 55-100.7L48.3 80zm55 251.3C68.5 356.9 48 397.6 48 440.8L48 496l288 0 0-55.2c0-43.2-20.5-83.9-55.3-109.5L192 265.9l-88.7 65.3z" />
    </Icon>
);

export default HourglassStart;