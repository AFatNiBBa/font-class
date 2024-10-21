
import { Icon } from "../../index";

/**
 * A component that renders the `house-flag` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-flag?s=regular house-flag}
 * @preview ![house-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/house-flag.svg)
 */
const HouseFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M472 0c-13.3 0-24 10.7-24 24l0 8 0 160 0 320 48 0 0-320 128 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16L496 32l0-8c0-13.3-10.7-24-24-24zM416 133L286.3 36.7c-8.5-6.3-20.1-6.3-28.6 0l-248 184c-10.6 7.9-12.9 22.9-5 33.6s22.9 12.9 33.6 5L64 240.2 64 432c0 44.2 35.8 80 80 80l256 0c5.5 0 10.8-.6 16-1.6l0-50.7c-4.7 2.7-10.2 4.3-16 4.3l-48 0 0-120c0-22.1-17.9-40-40-40l-80 0c-22.1 0-40 17.9-40 40l0 120-48 0c-17.7 0-32-14.3-32-32l0-227.4L272 85.9 416 192.7l0-59.8zM304 352l0 112-64 0 0-112 64 0z" />
    </Icon>
);

export default HouseFlag;