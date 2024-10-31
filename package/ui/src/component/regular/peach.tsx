
import { Icon } from "../../index";

/**
 * A component that renders the `peach` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peach?s=regular peach}
 * @preview ![peach](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/peach.svg)
 */
const Peach: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32c0 34.7 18.4 65.1 46 82C61.6 126.5 0 196 0 280C0 416.2 199.3 494.6 240.6 509.4c5 1.8 10.1 2.6 15.4 2.6s10.4-.8 15.4-2.6C312.7 494.6 512 416.2 512 280c0-84-61.6-153.5-142-166c27.6-16.9 46-47.3 46-82l0-8c0-13.3-10.7-24-24-24L352 0c-53 0-96 43-96 96c0-53-43-96-96-96L120 0C106.7 0 96 10.7 96 24l0 8zm72 128c58.1 0 106.6 41.3 117.6 96.2c2.6 13 13.1 23.8 26.4 23.8s24.2-10.8 22.3-23.9c-4.7-32.9-19-62.8-39.9-86.7c4.1-1 8.2-2.1 12.2-3.5c11.7-3.8 24.3-5.9 37.4-5.9c66.3 0 120 53.7 120 120c0 43.4-32.4 84.6-84.3 120.9c-49.2 34.4-103.9 55.9-123.7 63c-19.8-7.1-74.5-28.6-123.7-63C80.4 364.6 48 323.4 48 280c0-66.3 53.7-120 120-120z" />
    </Icon>
);

export default Peach;