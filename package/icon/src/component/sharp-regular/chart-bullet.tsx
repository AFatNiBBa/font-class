
import { Icon } from "../../index";

/**
 * A component that renders the `chart-bullet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bullet?s=sharp-regular chart-bullet}
 * @preview ![chart-bullet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chart-bullet.svg)
 */
const ChartBullet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0 24 0 8 176 0 48 0 0 48 0 64 0 48-48 0-176 0 0 8 0 24-48 0 0-24 0-8L48 224 0 224l0-48 0-64L0 64l48 0 192 0 0-8 0-24 48 0zM160 112l0 64 80 0 0-64-80 0zm128 0l0 64 176 0 0-64-176 0zm-176 0l-64 0 0 64 64 0 0-64zM384 256l0 24 0 8 80 0 48 0 0 48 0 64 0 48-48 0-80 0 0 8 0 24-48 0 0-24 0-8L48 448 0 448l0-48 0-64 0-48 48 0 288 0 0-8 0-24 48 0zM224 336l0 64 112 0 0-64-112 0zm160 0l0 64 80 0 0-64-80 0zm-208 0L48 336l0 64 128 0 0-64z" />
    </Icon>
);

export default ChartBullet;