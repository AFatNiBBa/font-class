
import { Icon, generic } from "../../index";

/**
 * A component that renders the `piano-keyboard` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano-keyboard?s=duotone piano-keyboard}
 * @preview ![piano-keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/piano-keyboard.svg)
 */
const PianoKeyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 224l64 0 0 160 80 0 0-68.3c2.4 1.4 4.9 2.4 7.6 3.2c1.3 .4 2.7 .6 4.1 .8c.7 .1 1.4 .2 2.1 .2s1.4 .1 2.2 .1c5.8 0 11.3-1.6 16-4.3l0 68.3 96 0 0-68.3c2.4 1.4 4.9 2.4 7.6 3.2c1.3 .4 2.7 .6 4.1 .8c.7 .1 1.4 .2 2.1 .2s1.4 .1 2.2 .1c5.8 0 11.3-1.6 16-4.3l0 68.3 96 0 0-68.3c2.4 1.4 4.9 2.4 7.6 3.2c1.3 .4 2.7 .6 4.1 .8c.7 .1 1.4 .2 2.1 .2s1.4 .1 2.2 .1c5.8 0 11.3-1.6 16-4.3l0 68.3 80 0 0-160 64 0 0 160c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 224z" />
        <path d="M64 64C28.7 64 0 92.7 0 128l0 96 128 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 128 0 0-96c0-35.3-28.7-64-64-64L64 64z" />
    </Icon>
);

export default PianoKeyboard;