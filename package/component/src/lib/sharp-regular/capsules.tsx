
import { Icon } from "../../index";

/**
 * A component that renders the `capsules` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/capsules?s=sharp-regular capsules}
 * @preview ![capsules](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/capsules.svg)
 */
const Capsules: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 144c0-35.3 28.7-64 64-64s64 28.7 64 64l0 112L48 256l0-112zM0 144L0 368c0 61.9 50.1 112 112 112s112-50.1 112-112l0-178.4c1.8 19.1 8.2 38 19.8 54.8L372.3 431.7c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 113.3C391.8 61.5 321.9 49 271.3 85.2c-28 20-44.3 50.8-47.3 83l0-24.2c0-61.9-50.1-112-112-112S0 82.1 0 144zm283.4 73.3c-20.9-30.4-13.3-72.2 15.8-93c28.5-20.4 68-13.7 88.5 16.2l66.9 97.5L348.5 312.2l-65.1-94.9z" />
    </Icon>
);

export default Capsules;