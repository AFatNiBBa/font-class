
import { Icon } from "../../index";

/**
 * A component that renders the `eye-dropper` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-dropper?s=sharp-thin eye-dropper}
 * @preview ![eye-dropper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/eye-dropper.svg)
 */
const EyeDropper: typeof Icon = x => (
    <Icon {...x}>
        <path d="M211.8 159.1l11.3 11.3L341.6 288.9l11.3 11.3L372.7 320l5.7 5.7 5.7 5.7L395.3 320l-5.7-5.7-5.7-5.7-8.5-8.5-11.3-11.3 11.3-11.3L482.8 170.4c39-39 39-102.2 0-141.1s-102.2-39-141.1 0L234.4 136.5l-11.3 11.3-11.3-11.3-8.5-8.5-5.7-5.7-5.7-5.7L180.7 128l5.7 5.7 5.7 5.7 19.8 19.8zm259.7 0L352.9 277.6 234.4 159.1 352.9 40.5c32.7-32.7 85.8-32.7 118.5 0s32.7 85.8 0 118.5zM32 344l0 88L0 480l32 32 48-32 88 0L327.7 320.3 316.4 309l-155 155L80 464l-4.8 0-4 2.7L34 491.4 20.6 478l24.7-37.1 2.7-4 0-4.8 0-81.4 155-155-11.3-11.3L32 344z" />
    </Icon>
);

export default EyeDropper;