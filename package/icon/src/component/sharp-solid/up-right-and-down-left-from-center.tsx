
import { Icon } from "../../index";

/**
 * A component that renders the `up-right-and-down-left-from-center` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right-and-down-left-from-center?s=sharp-solid up-right-and-down-left-from-center}
 * @preview ![up-right-and-down-left-from-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/up-right-and-down-left-from-center.svg)
 */
const UpRightAndDownLeftFromCenter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 160l-32 32-52-52L328 240l-56-56L372 84 320 32 352 0 512 0l0 160zM0 352l32-32 52 52L184 272l56 56L140 428l52 52-32 32L0 512 0 352z" />
    </Icon>
);

export default UpRightAndDownLeftFromCenter;