
import { Icon } from "../../index";

/**
 * A component that renders the `down-left-and-up-right-to-center` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-left-and-up-right-to-center?s=sharp-solid down-left-and-up-right-to-center}
 * @preview ![down-left-and-up-right-to-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/down-left-and-up-right-to-center.svg)
 */
const DownLeftAndUpRightToCenter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 80l32-32 52 52L456 0l56 56L412 156l52 52-32 32-160 0 0-160zM240 432l-32 32-52-52L56 512 0 456 100 356 48 304l32-32 160 0 0 160z" />
    </Icon>
);

export default DownLeftAndUpRightToCenter;