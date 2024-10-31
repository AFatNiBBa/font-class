
import { Icon } from "../../index";

/**
 * A component that renders the `circle-three-quarters` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters?s=thin circle-three-quarters}
 * @preview ![circle-three-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-three-quarters.svg)
 */
const CircleThreeQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 272c-8.8 0-16-7.2-16-16l0-224c0-9.4-7.3-15-14-14.1C107.6 32.6 16 133.6 16 256c0 132.5 107.5 240 240 240c122.4 0 223.4-91.6 238.2-210c.8-6.7-4.7-14-14.2-14l-224 0zM224.1 2C241.6-.2 256 14.3 256 32l0 208 0 16 16 0 208 0c17.7 0 32.2 14.4 30 31.9C494.3 414.2 386.6 512 256 512C114.6 512 0 397.4 0 256C0 125.4 97.8 17.7 224.1 2z" />
    </Icon>
);

export default CircleThreeQuarters;