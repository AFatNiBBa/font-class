
import { Icon } from "../../index";

/**
 * A component that renders the `face-zipper` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-zipper?s=sharp-solid face-zipper}
 * @preview ![face-zipper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-zipper.svg)
 */
const FaceZipper: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256c0 40-9.2 77.8-25.5 111.5l-88.2-44.1-20.6-10.3-16.3 16.3L336 354.7l0-18.7 0-16-32 0 0 16 0 32 0 16 12.2 0 7.2 14.3 44.1 88.2C333.8 502.8 296 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM144 336l0-16-32 0 0 16 0 32 0 16 32 0 0-16 0-32zm64 0l0-16-32 0 0 16 0 32 0 16 32 0 0-16 0-32zm64 0l0-16-32 0 0 16 0 32 0 16 32 0 0-16 0-32zm240 80l0 32-64 64-32 0L352 384l32-32 128 64zm-63.5 16.5L457 424l-17-17-8.5 8.5-16 16L407 440l17 17 8.5-8.5 16-16z" />
    </Icon>
);

export default FaceZipper;