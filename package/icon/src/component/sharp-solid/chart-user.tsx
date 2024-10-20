
import { Icon } from "../../index";

/**
 * A component that renders the `chart-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-user?s=sharp-solid chart-user}
 * @preview ![chart-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-user.svg)
 */
const ChartUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 0l32 0L608 0l32 0 0 32 0 352 0 32-32 0-283.4 0-19.2-64L576 352l0-288L224 64l0 49.1C205.2 102.2 183.3 96 160 96l0-64 0-32zM473 201l-72 72-17 17-17-17-64-64-17-17L320 158.1l17 17 47 47 55-55-39-39 16-16 112 0 0 112-16 16-39-39zM64 224a96 96 0 1 1 192 0A96 96 0 1 1 64 224zM272 352l48 160L0 512 48 352l224 0z" />
    </Icon>
);

export default ChartUser;