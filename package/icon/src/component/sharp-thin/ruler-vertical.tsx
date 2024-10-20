
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-vertical` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-vertical?s=sharp-thin ruler-vertical}
 * @preview ![ruler-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ruler-vertical.svg)
 */
const RulerVertical: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M240 16L16 16l0 480 224 0 0-88-80 0-8 0 0-16 8 0 80 0 0-80-80 0-8 0 0-16 8 0 80 0 0-80-80 0-8 0 0-16 8 0 80 0 0-80-80 0-8 0 0-16 8 0 80 0 0-88zm16 376l0 16 0 88 0 16-16 0L16 512 0 512l0-16L0 16 0 0 16 0 240 0l16 0 0 16 0 88 0 16 0 80 0 16 0 80 0 16 0 80z" />
    </Icon>
);

export default RulerVertical;