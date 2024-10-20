
import { Icon } from "../../index";

/**
 * A component that renders the `chart-bullet` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bullet?s=sharp-solid chart-bullet}
 * @preview ![chart-bullet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-bullet.svg)
 */
const ChartBullet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0 24 0 8 160 0 64 0 0 64 0 32 0 64-64 0-160 0 0 8 0 24-48 0 0-24 0-8L64 224 0 224l0-64 0-32L0 64l64 0 176 0 0-8 0-24 48 0zM160 128l0 32 80 0 0-32-80 0zm128 0l0 32 160 0 0-32-160 0zm48 224l-80 0 0 32 80 0 0-32zm0-64l0-8 0-24 48 0 0 24 0 8 64 0 64 0 0 64 0 32 0 64-64 0-64 0 0 8 0 24-48 0 0-24 0-8L64 448 0 448l0-64 0-32 0-64 64 0 272 0zm48 64l0 32 64 0 0-32-64 0z" />
    </Icon>
);

export default ChartBullet;