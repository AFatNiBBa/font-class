
import { Icon } from "../../index";

/**
 * A component that renders the `flag` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag?s=sharp-light flag}
 * @preview ![flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/flag.svg)
 */
const Flag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 16L32 0 0 0 0 16 0 64 0 367l0 33 0 96 0 16 32 0 0-16 0-104 96.3-24.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4L448 368l0-316.2L448 16 416 32 393.6 43.2c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L32 56l0-40zm0 73L140.7 61.8c30.7-7.7 63.1-4.1 91.4 10c55.3 27.7 120.4 27.7 175.8 0l8.1-4.1 0 278-34.7 13c-37.9 14.2-80 12-116.2-6.1c-44.7-22.4-96-28-144.5-15.9L32 359 32 89z" />
    </Icon>
);

export default Flag;