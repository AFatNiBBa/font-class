
import { Icon } from "../../index";

/**
 * A component that renders the `bomb` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bomb?s=sharp-thin bomb}
 * @preview ![bomb](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bomb.svg)
 */
const Bomb: typeof Icon = x => (
    <Icon {...x}>
        <path d="M456 8l0 8 0 40 40 0 8 0 0 16-8 0-40 0 0 40 0 8-16 0 0-8 0-40-40 0-8 0 0-16 8 0 40 0 0-40 0-8 16 0zM282.6 126.7l-9.6-3.4C252.8 116 230.9 112 208 112C102 112 16 198 16 304s86 192 192 192s192-86 192-192c0-22.9-4-44.8-11.3-65.1l-3.4-9.6 7.2-7.2 2.9-2.9L406.6 208l-11.3-11.3-80-80L304 105.4l-11.3 11.3-2.9 2.9-7.2 7.2zm10.1-32.7L304 82.7l11.3 11.3 11.3 11.3L361 139.7l33.4-33.4 5.7-5.7L411.3 112l-5.7 5.7L372.3 151l34.3 34.3 11.3 11.3L429.3 208l-11.3 11.3-11.3 11.3-2.9 2.9c7.9 22 12.2 45.7 12.2 70.5c0 114.9-93.1 208-208 208S0 418.9 0 304S93.1 96 208 96c24.7 0 48.5 4.3 70.5 12.3l2.9-2.9 11.3-11.3zM88 296l0 8-16 0 0-8c0-70.7 57.3-128 128-128l8 0 0 16-8 0c-61.9 0-112 50.1-112 112z" />
    </Icon>
);

export default Bomb;