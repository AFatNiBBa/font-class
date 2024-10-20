
import { Icon } from "../../index";

/**
 * A component that renders the `angle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle?s=sharp-solid angle}
 * @preview ![angle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/angle.svg)
 */
const Angle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 480l0-61.1L195.7 49l15-28.3 56.6 29.9L252.3 79 73.9 416 416 416l32 0 0 64-32 0L20.8 480 0 480zM315.5 253.2l-40.8 25.3c-16.5-23.6-36.3-44.6-58.8-62.5l22.8-43c29.7 22.4 55.7 49.5 76.8 80.2zm-23.9 52.5l40.8-25.3c17.8 31.8 30.6 66.7 37.6 103.7l-49 0c-6.1-27.8-16.1-54.1-29.4-78.3z" />
    </Icon>
);

export default Angle;