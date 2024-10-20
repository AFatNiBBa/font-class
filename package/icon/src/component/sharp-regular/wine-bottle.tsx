
import { Icon } from "../../index";

/**
 * A component that renders the `wine-bottle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-bottle?s=sharp-regular wine-bottle}
 * @preview ![wine-bottle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wine-bottle.svg)
 */
const WineBottle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M417.9 0L400 0s0 0 0 0L375 25s0 0 0 0l10.7 10.7-1 1-83.6 83.6c-41.9-10.8-88.2 .2-120.9 32.9L33.9 299.5 0 333.5l33.9 33.9L144.6 478.1 178.5 512l33.9-33.9L358.7 331.8c32.8-32.8 43.8-79.1 32.9-120.9l83.6-83.6 1-1L487 137l25-25 0-17.9L417.9 0zM357.8 176.9l-19.4 19.4 6.9 26.6c6.5 25 .4 52.4-18 72.4L216.7 184.7c20.1-18.4 47.4-24.4 72.4-18l26.6 6.9 19.4-19.4 83.6-83.6 22.6 22.6-83.6 83.6zM104.7 296.7L215.3 407.3l-36.8 36.8L67.9 333.5l36.8-36.8z" />
    </Icon>
);

export default WineBottle;