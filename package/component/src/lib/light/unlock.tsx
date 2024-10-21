
import { Icon } from "../../index";

/**
 * A component that renders the `unlock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock?s=light unlock}
 * @preview ![unlock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/unlock.svg)
 */
const Unlock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 128c0-53 43-96 96-96c43.5 0 80.2 28.9 92 68.6c2.5 8.5 11.4 13.3 19.9 10.8s13.3-11.4 10.8-19.9C331 38.6 282 0 224 0C153.3 0 96 57.3 96 128l0 64-16 0c-44.2 0-80 35.8-80 80L0 432c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-160c0-44.2-35.8-80-80-80l-240 0 0-64zM32 272c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48L80 480c-26.5 0-48-21.5-48-48l0-160z" />
    </Icon>
);

export default Unlock;