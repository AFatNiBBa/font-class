
import { Icon } from "../../index";

/**
 * A component that renders the `mountain` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain?s=sharp-thin mountain}
 * @preview ![mountain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mountain.svg)
 */
const Mountain: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 464l480 0 0-51.1L367.4 224l-108.1 0-61.7 61.7-5.7 5.7-5.7-5.7-49.8-49.8L16 412.9 16 464zM356.5 208L256 60.4l-110.3 162L192 268.7l58.3-58.3 2.3-2.3 3.3 0 100.5 0zM126.5 222.2L246.3 46.2 256 32l9.7 14.2L512 408l0 56 0 16-16 0L16 480 0 480l0-16 0-56L125 224.4l-.4-.4 1.8-1.8z" />
    </Icon>
);

export default Mountain;