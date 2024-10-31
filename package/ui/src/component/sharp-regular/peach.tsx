
import { Icon } from "../../index";

/**
 * A component that renders the `peach` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peach?s=sharp-regular peach}
 * @preview ![peach](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/peach.svg)
 */
const Peach: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 280c0-66.3-53.7-120-120-120s-120 53.7-120 120c0 48.1 42.1 93.7 105 132c29.2 17.8 58.8 31.5 81.3 40.7c8.5 3.5 15.9 6.3 21.7 8.5c5.8-2.1 13.2-5 21.7-8.5c22.5-9.3 52.1-22.9 81.3-40.7c62.9-38.3 105-83.9 105-132c0-66.3-53.7-120-120-120c-17.4 0-33.9 3.7-48.8 10.3C320.6 199.7 336 238.1 336 280l-48 0zM151.6 112.8C118.3 93.4 96 57.3 96 16L96 0l48 0c61.9 0 112 50.1 112 112C256 50.1 306.1 0 368 0l48 0 0 16c0 41.3-22.3 77.4-55.6 96.8C445.5 121 512 192.7 512 280c0 152-256 232-256 232s-256-80-256-232c0-87.3 66.5-159 151.6-167.2z" />
    </Icon>
);

export default Peach;