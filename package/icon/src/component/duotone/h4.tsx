
import { Icon, generic } from "../../index";

/**
 * A component that renders the `h4` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h4?s=duotone h4}
 * @preview ![h4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/h4.svg)
 */
const H4: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 256 0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 192 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 224 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96z" />
        <path d="M479 103.8c4.3-17.1-6.1-34.5-23.3-38.8s-34.5 6.1-38.8 23.3l-48 192c-2.4 9.6-.2 19.7 5.8 27.5s15.4 12.3 25.2 12.3l176 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-135 0L479 103.8z" />
    </Icon>
);

export default H4;