
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-bullet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bullet?s=duotone chart-bullet}
 * @preview ![chart-bullet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-bullet.svg)
 */
const ChartBullet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 64l0 64 80 0 0-64-80 0zm0 96l0 64 80 0 0-64-80 0zm96 128l0 64 80 0 0-64-80 0zm0 96l0 64 80 0 0-64-80 0zM288 64l0 64 160 0 0 32-160 0 0 64 176 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L288 64zm96 224l0 64 64 0 0 32-64 0 0 64 80 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-80 0z" />
        <path d="M264 32c-13.3 0-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176c0-13.3-10.7-24-24-24zM48 64C21.5 64 0 85.5 0 112l0 64c0 26.5 21.5 48 48 48l112 0 0-160L48 64zm0 224c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l208 0 0-160L48 288zm336-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176z" />
    </Icon>
);

export default ChartBullet;