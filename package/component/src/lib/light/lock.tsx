
import { Icon } from "../../index";

/**
 * A component that renders the `lock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock?s=light lock}
 * @preview ![lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/lock.svg)
 */
const Lock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 128l0 64 192 0 0-64c0-53-43-96-96-96s-96 43-96 96zM96 192l0-64C96 57.3 153.3 0 224 0s128 57.3 128 128l0 64 16 0c44.2 0 80 35.8 80 80l0 160c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 272c0-44.2 35.8-80 80-80l16 0zM32 272l0 160c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48L80 224c-26.5 0-48 21.5-48 48z" />
    </Icon>
);

export default Lock;