
import { Icon } from "../../index";

/**
 * A component that renders the `flower` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flower?s=sharp-light flower}
 * @preview ![flower](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/flower.svg)
 */
const Flower: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M203.3 88.7C185.1 73.3 161.7 64 136 64C78.6 64 32 110.6 32 168c0 25.7 9.3 49.1 24.7 67.3L74.3 256 56.7 276.7C41.3 294.9 32 318.3 32 344c0 57.4 46.6 104 104 104c25.7 0 49.1-9.3 67.3-24.7L224 405.7l20.7 17.6C262.9 438.7 286.3 448 312 448c57.4 0 104-46.6 104-104c0-25.7-9.3-49.1-24.7-67.3L373.7 256l17.6-20.7C406.7 217.1 416 193.7 416 168c0-57.4-46.6-104-104-104c-25.7 0-49.1 9.3-67.3 24.7L224 106.3 203.3 88.7zM448 168c0 33.6-12.2 64.3-32.3 88c20.1 23.7 32.3 54.4 32.3 88c0 75.1-60.9 136-136 136c-33.6 0-64.3-12.2-88-32.3c-23.7 20.1-54.4 32.3-88 32.3C60.9 480 0 419.1 0 344c0-33.6 12.2-64.3 32.3-88C12.2 232.3 0 201.6 0 168C0 92.9 60.9 32 136 32c33.6 0 64.3 12.2 88 32.3C247.7 44.2 278.4 32 312 32c75.1 0 136 60.9 136 136zM224 352l-22.6-22.6-50.7-50.7L128 256l22.6-22.6 50.7-50.7L224 160l22.6 22.6 50.7 50.7L320 256l-22.6 22.6-50.7 50.7L224 352zm0-146.7L173.3 256 224 306.7 274.7 256 224 205.3z" />
    </Icon>
);

export default Flower;