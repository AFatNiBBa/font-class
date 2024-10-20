
import { Icon } from "../../index";

/**
 * A component that renders the `chart-bullet` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bullet?s=sharp-light chart-bullet}
 * @preview ![chart-bullet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chart-bullet.svg)
 */
const ChartBullet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0 16 0 16 192 0 32 0 0 32 0 96 0 32-32 0-192 0 0 16 0 16-32 0 0-16 0-16L32 224 0 224l0-32L0 96 0 64l32 0 224 0 0-16 0-16 32 0zM160 96l0 96 96 0 0-96-96 0zm128 0l0 96 192 0 0-96L288 96zM128 96L32 96l0 96 96 0 0-96zM384 256l0 16 0 16 96 0 32 0 0 32 0 96 0 32-32 0-96 0 0 16 0 16-32 0 0-16 0-16L32 448 0 448l0-32 0-96 0-32 32 0 320 0 0-16 0-16 32 0zM224 416l128 0 0-96-128 0 0 96zm160-96l0 96 96 0 0-96-96 0zm-192 0L32 320l0 96 160 0 0-96z" />
    </Icon>
);

export default ChartBullet;