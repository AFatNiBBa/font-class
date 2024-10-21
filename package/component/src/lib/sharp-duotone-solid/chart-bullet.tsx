
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-bullet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bullet?s=sharp-duotone-solid chart-bullet}
 * @preview ![chart-bullet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-bullet.svg)
 */
const ChartBullet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 64l0 64 80 0 0-64-80 0zm0 96l0 64 80 0 0-64-80 0zm96 128l0 64 80 0 0-64-80 0zm0 96l0 64 80 0 0-64-80 0zM288 64l0 64 160 0 0 32-160 0 0 64 160 0 64 0 0-64 0-32 0-64-64 0L288 64zm96 224l0 64 64 0 0 32-64 0 0 64 64 0 64 0 0-64 0-32 0-64-64 0-64 0z" />
        <path d="M288 32l-48 0 0 24 0 176 0 24 48 0 0-24 0-176 0-24zM160 64L0 64 0 224l160 0 0-160zm96 224L0 288 0 448l256 0 0-160zm128-8l0-24-48 0 0 24 0 176 0 24 48 0 0-24 0-176z" />
    </Icon>
);

export default ChartBullet;