
import { Icon } from "../../index";

/**
 * A component that renders the `draw-square` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/draw-square?s=sharp-solid draw-square}
 * @preview ![draw-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/draw-square.svg)
 */
const DrawSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32c23.7 0 44.4 12.9 55.4 32l209.1 0c11.1-19.1 31.7-32 55.4-32c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 209.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-209.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-209.1C12.9 140.4 0 119.7 0 96zm96 55.4l0 209.1c9.7 5.6 17.8 13.7 23.4 23.4l209.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-209.1c-9.7-5.6-17.8-13.7-23.4-23.4l-209.1 0c-5.6 9.7-13.7 17.8-23.4 23.4z" />
    </Icon>
);

export default DrawSquare;