
import { Icon } from "../../index";

/**
 * A component that renders the `beer-mug` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug?s=sharp-thin beer-mug}
 * @preview ![beer-mug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/beer-mug.svg)
 */
const BeerMug: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 0c29 0 54.6 14 70.7 35.6C291.5 23.4 308.9 16 328 16c39.8 0 72 32.2 72 72s-32.2 72-72 72c-19.1 0-36.5-7.4-49.3-19.6C262.6 162 237 176 208 176s-54.6-14-70.7-35.6C124.5 152.6 107.1 160 88 160c-39.8 0-72-32.2-72-72s32.2-72 72-72c19.1 0 36.5 7.4 49.3 19.6C153.4 14 179 0 208 0zM145.3 52.5l-5.9 10.4-7.4-9.4C121.8 40.4 105.9 32 88 32C57.1 32 32 57.1 32 88s25.1 56 56 56c17.9 0 33.8-8.4 44.1-21.5l7.4-9.4 5.9 10.4C157.7 145.3 181.2 160 208 160s50.3-14.7 62.7-36.5l5.9-10.4 7.4 9.4C294.2 135.6 310.1 144 328 144c30.9 0 56-25.1 56-56s-25.1-56-56-56c-17.9 0-33.8 8.4-44.1 21.5l-7.4 9.4-5.9-10.4C258.3 30.7 234.8 16 208 16s-50.3 14.7-62.7 36.5zM368 496l0-304 0-8 0-8 8 0 7.4 0 .6-.3 0 .3 120 0 8 0 0 8 0 192 0 5.2-4.8 2.1L384 437.2l0 58.8 0 16-16 0L48 512l-16 0 0-16 0-320.3c5.1 3.2 10.4 6 16 8.4l0 312 320 0zm16-76.2l112-49L496 192l-112 0 0 227.8zM144 224l0 8 0 208 0 8-16 0 0-8 0-208 0-8 16 0zm72 0l0 8 0 208 0 8-16 0 0-8 0-208 0-8 16 0zm72 0l0 8 0 208 0 8-16 0 0-8 0-208 0-8 16 0z" />
    </Icon>
);

export default BeerMug;