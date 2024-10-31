
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-clock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-clock?s=thin hourglass-clock}
 * @preview ![hourglass-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/hourglass-clock.svg)
 */
const HourglassClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8l24 0 0 55.2c0 48.3 23 93.7 61.8 122.4L178.5 256 93.8 318.4C55 347 32 392.5 32 440.8L32 496 8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l322.8 0c-6.9-4.9-13.5-10.2-19.6-16L48 496l0-55.2c0-43.2 20.5-83.9 55.3-109.5L192 265.9l71.1 52.4c1.6-5.4 3.4-10.7 5.5-15.8L205.5 256l84.7-62.4C329 165 352 119.5 352 71.2L352 16l24 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 0zM336 16l0 55.2c0 43.2-20.5 83.9-55.3 109.5L192 246.1l-88.7-65.3C68.5 155.1 48 114.4 48 71.2L48 16l288 0zm96 224a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-224c-4.4 0-8 3.6-8 8l0 72c0 4.4 3.6 8 8 8l56 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-48 0 0-64c0-4.4-3.6-8-8-8z" />
    </Icon>
);

export default HourglassClock;