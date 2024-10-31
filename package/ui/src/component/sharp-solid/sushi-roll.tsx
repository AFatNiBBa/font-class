
import { Icon } from "../../index";

/**
 * A component that renders the `sushi-roll` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sushi-roll?s=sharp-solid sushi-roll}
 * @preview ![sushi-roll](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sushi-roll.svg)
 */
const SushiRoll: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 368l0-224C448 82.1 347.7 32 224 32S0 82.1 0 144L0 368s48 112 224 112s224-112 224-112zM209.4 80.3l8.4 18.3-75.3 26.5-3.9 1.4-3 2.8L85.2 175.9C71.7 166.5 64 155.6 64 144c0-33.4 63.9-60.8 145.4-63.7zm-49.8 81.2l74.9-26.4 8.9 19.4 3.4 7.5 7.7 2.9 73.7 27.6c-28 9.6-64.5 15.5-104.3 15.5c-37.6 0-72.2-5.2-99.5-13.9l35.2-32.6zm94.1-80.4C327.9 86.7 384 112.7 384 144c0 8-3.7 15.7-10.4 22.8l-97.2-36.4L253.8 81.1z" />
    </Icon>
);

export default SushiRoll;