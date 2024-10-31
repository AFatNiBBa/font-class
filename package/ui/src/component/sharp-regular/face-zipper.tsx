
import { Icon } from "../../index";

/**
 * A component that renders the `face-zipper` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-zipper?s=sharp-regular face-zipper}
 * @preview ![face-zipper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-zipper.svg)
 */
const FaceZipper: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 32.2-7.3 62.8-20.4 90l42.9 21.5C502.8 333.8 512 296 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c40 0 77.8-9.2 111.5-25.5L346 443.6c-27.2 13.1-57.8 20.4-90 20.4C141.1 464 48 370.9 48 256zm304 82.7l0-2.7 0-16-32 0 0 16 0 32 0 2.7 9.4-9.4L352 338.7zM176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM224 336l0-16-32 0 0 16 0 32 0 16 32 0 0-16 0-32zm64-16l-32 0 0 16 0 32 0 16 32 0 0-16 0-32 0-16zm-128 0l-32 0 0 16 0 32 0 16 32 0 0-16 0-32 0-16zm352 96L384 352l-32 32 64 128 32 0 64-64 0-32zm-63.5 16.5l-16 16L424 457l-17-17 8.5-8.5 16-16L440 407l17 17-8.5 8.5z" />
    </Icon>
);

export default FaceZipper;