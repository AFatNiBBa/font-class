
import { Icon } from "../../index";

/**
 * A component that renders the `eject` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eject?s=sharp-thin eject}
 * @preview ![eject](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/eject.svg)
 */
const Eject: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 336l416 0 0-25.7L224 87.4 16 310.3 16 336zM0 336l0-32L213.1 75.7 224 64l10.9 11.7L448 304l0 32 0 16-16 0L16 352 0 352l0-16zm8 96l432 0 8 0 0 16-8 0L8 448l-8 0 0-16 8 0z" />
    </Icon>
);

export default Eject;