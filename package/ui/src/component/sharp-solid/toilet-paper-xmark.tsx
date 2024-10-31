
import { Icon } from "../../index";

/**
 * A component that renders the `toilet-paper-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper-xmark?s=sharp-solid toilet-paper-xmark}
 * @preview ![toilet-paper-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/toilet-paper-xmark.svg)
 */
const ToiletPaperXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 0L348.2 0C336.6 12.2 327 26.9 319.5 41.9C299.5 82 288 135.1 288 192s11.5 110 31.5 150.1c7.5 15 17.1 29.7 28.7 41.9L96 384C43 384 0 298 0 192S43 0 96 0zM320 192c0-83.6 26.7-154.7 64-181.1C394 3.8 404.8 0 416 0c53 0 96 86 96 192c0 35-4.7 67.8-12.8 96c-16.6 57.4-47.6 96-83.2 96c-11.2 0-22-3.8-32-10.9c-37.3-26.4-64-97.5-64-181.1zm64 0c0 35.3 14.3 64 32 64s32-28.7 32-64s-14.3-64-32-64s-32 28.7-32 64zM160 416l256 0c44.8 0 76.9-35.2 96-72.9L512 512l-352 0 0-96zm40-153.4L222.6 240l-11.3-11.3L174.6 192l36.7-36.7L222.6 144 200 121.4l-11.3 11.3L152 169.4l-36.7-36.7L104 121.4 81.4 144l11.3 11.3L129.4 192 92.7 228.7 81.4 240 104 262.6l11.3-11.3L152 214.6l36.7 36.7L200 262.6z" />
    </Icon>
);

export default ToiletPaperXmark;