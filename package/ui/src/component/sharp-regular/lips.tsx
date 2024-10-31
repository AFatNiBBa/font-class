
import { Icon } from "../../index";

/**
 * A component that renders the `lips` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lips?s=sharp-regular lips}
 * @preview ![lips](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/lips.svg)
 */
const Lips: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M192 64l96 48 96-48L576 224s-80 224-240 224l-96 0C80 448 0 224 0 224L192 64zm117.5 90.9c-13.5 6.8-29.4 6.8-42.9 0l-67.9-34L58.2 238l.2 .4c9.2 19.3 22.8 44.7 40.7 69.7C136.4 360.4 183.9 400 240 400l96 0c56.1 0 103.6-39.6 140.9-91.9c17.9-25.1 31.5-50.5 40.7-69.7l.2-.4L377.4 121l-67.9 34zM96 236l123.4-28s41.3 14 68.6 14s68.6-14 68.6-14L480 236s-68.6 84-192 84s-192-84-192-84z" />
    </Icon>
);

export default Lips;