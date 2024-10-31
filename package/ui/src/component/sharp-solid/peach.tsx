
import { Icon } from "../../index";

/**
 * A component that renders the `peach` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peach?s=sharp-solid peach}
 * @preview ![peach](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/peach.svg)
 */
const Peach: typeof Icon = x => (
    <Icon {...x}>
        <path d="M344 80c-31.5 0-61.4 7.3-88 20.4C229.4 87.3 199.5 80 168 80c-10 0-19.9 .7-29.6 2.2C122.1 64.9 112 41.6 112 16l0-16 16 0 32 0c53 0 96 43 96 96c0-53 43-96 96-96l32 0 16 0 0 16c0 25.6-10.1 48.9-26.4 66.2C363.9 80.7 354 80 344 80zM168 112c31.9 0 61.7 8.9 87.1 24.3l.9 .5c48 29.6 80 82.6 80 143.1l32 0c0-64.8-30.8-122.4-78.6-158.9c17.1-5.9 35.5-9.1 54.6-9.1c92.8 0 168 75.2 168 168c0 152-256 232-256 232s-256-80-256-232c0-92.8 75.2-168 168-168z" />
    </Icon>
);

export default Peach;