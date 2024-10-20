
import { Icon } from "../../index";

/**
 * A component that renders the `face-eyes-xmarks` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-eyes-xmarks?s=sharp-regular face-eyes-xmarks}
 * @preview ![face-eyes-xmarks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-eyes-xmarks.svg)
 */
const FaceEyesXmarks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM137 135l23 23 23-23 17-17L233.9 152l-17 17-23 23 23 23 17 17L200 265.9l-17-17-23-23-23 23-17 17L86.1 232l17-17 23-23-23-23-17-17L120 118.1l17 17zm192 0l23 23 23-23 17-17L425.9 152l-17 17-23 23 23 23 17 17L392 265.9l-17-17-23-23-23 23-17 17L278.1 232l17-17 23-23-23-23-17-17L312 118.1l17 17zM256 304c44.2 0 80 35.8 80 80l0 16-160 0 0-16c0-44.2 35.8-80 80-80z" />
    </Icon>
);

export default FaceEyesXmarks;