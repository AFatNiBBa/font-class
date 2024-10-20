
import { Icon } from "../../index";

/**
 * A component that renders the `circle-7` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-7?s=light circle-7}
 * @preview ![circle-7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-7.svg)
 */
const Circle_7: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 128c-8.8 0-16 7.2-16 16s7.2 16 16 16l132.4 0L194.1 360.1c-4.4 7.7-1.7 17.4 6 21.8s17.4 1.7 21.8-6l128-224c2.8-5 2.8-11-.1-16s-8.1-8-13.8-8l-160 0z" />
    </Icon>
);

export default Circle_7;