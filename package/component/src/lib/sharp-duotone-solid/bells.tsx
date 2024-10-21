
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bells` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bells?s=sharp-duotone-solid bells}
 * @preview ![bells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bells.svg)
 */
const Bells: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 305l241.9 88 11.3-44.4-35.3-97.1C188.6 171.2 222 83.2 293.1 41.2c-.8-.3-1.7-.6-2.5-1c-15.3-5.6-31-8.2-46.4-8.2c-55.5 0-107.5 34.2-127.6 89.4l-36.4 100-67.2 48L0 305zm248-64.4L286.7 347l-21.6 84.5 13.7 37.6L640 337.7l-13.7-37.6-70.9-50.9L516.7 142.9c-27-74.2-109.1-112.5-183.3-85.5s-112.5 109-85.4 183.2z" />
        <path d="M97.5 374.6c-.4 3-.7 6.2-.7 9.3c0 35.4 28.7 64 64.1 64c23.1 0 43.3-12.2 54.5-30.4L97.5 374.6zm331.3 78.3c11.6 16.4 30.7 27.1 52.4 27.1c35.4 0 64.1-28.7 64.1-64c0-1.8-.1-3.6-.2-5.4L428.8 452.9z" />
    </Icon>
);

export default Bells;