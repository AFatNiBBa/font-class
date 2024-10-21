
import { Icon } from "../../index";

/**
 * A component that renders the `chart-bullet` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bullet?s=solid chart-bullet}
 * @preview ![chart-bullet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chart-bullet.svg)
 */
const ChartBullet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 32c13.3 0 24 10.7 24 24l0 8 176 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-176 0 0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8L48 224c-26.5 0-48-21.5-48-48l0-64C0 85.5 21.5 64 48 64l192 0 0-8c0-13.3 10.7-24 24-24zM160 128l0 32 80 0 0-32-80 0zm128 0l0 32 160 0 0-32-160 0zm48 256l0-32-80 0 0 32 80 0zm0 64L48 448c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l288 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8 80 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-80 0 0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8zm48-96l0 32 64 0 0-32-64 0z" />
    </Icon>
);

export default ChartBullet;