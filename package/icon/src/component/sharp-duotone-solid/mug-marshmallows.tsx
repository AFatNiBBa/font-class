
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mug-marshmallows` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-marshmallows?s=sharp-duotone-solid mug-marshmallows}
 * @preview ![mug-marshmallows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mug-marshmallows.svg)
 */
const MugMarshmallows: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 32l194.7 0-73.4 73.4L130.7 128 32 128l0-96zM96 160l64 0 0 96-64 0 0-96zm80-32l96-96 96 96-192 0z" />
        <path d="M96 160L0 160 0 480l384 0 0-96 16 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-16 0-32 0-192 0 0 96-64 0 0-96zM384 320l0-96 16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0z" />
    </Icon>
);

export default MugMarshmallows;