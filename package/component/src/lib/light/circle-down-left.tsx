
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down-left?s=light circle-down-left}
 * @preview ![circle-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-down-left.svg)
 */
const CircleDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448zm0 480A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM176 328c0 4.4 3.6 8 8 8l113.4 0c3.7 0 6.6-3 6.6-6.6c0-1.8-.7-3.4-1.9-4.7l-25.4-25.4c-6.2-6.2-6.2-16.4 0-22.6l59.1-59.1c3.6-3.6 4.9-9 3.3-13.9c-.7-2-1.8-3.8-3.3-5.3l-22.1-22.1c-1.5-1.5-3.3-2.6-5.3-3.3c-4.9-1.6-10.3-.4-13.9 3.3l-59.1 59.1c-6.2 6.2-16.4 6.2-22.6 0l-25.4-25.4c-1.2-1.2-2.9-1.9-4.7-1.9c-3.7 0-6.6 3-6.6 6.6L176 328zm8 40c-22.1 0-40-17.9-40-40l0-113.4c0-21.3 17.3-38.6 38.6-38.6c10.2 0 20.1 4.1 27.3 11.3L224 201.4l47.7-47.7c12.2-12.2 30.3-16.5 46.7-11c6.7 2.2 12.8 6 17.8 11l22.1 22.1c5 5 8.8 11.1 11 17.8c5.5 16.4 1.2 34.5-11 46.7L310.6 288l14.1 14.1c7.2 7.2 11.3 17.1 11.3 27.3c0 21.3-17.3 38.6-38.6 38.6L184 368z" />
    </Icon>
);

export default CircleDownLeft;