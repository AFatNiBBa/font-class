
import { Icon } from "../../index";

/**
 * A component that renders the `bring-front` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-front?s=sharp-thin bring-front}
 * @preview ![bring-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bring-front.svg)
 */
const BringFront: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 16l224 0 0 48 16 0 0-48 0-16L240 0 16 0 0 0 0 16 0 240l0 16 16 0 112 0 0-16L16 240 16 16zM384 496l0 16 16 0 224 0 16 0 0-16 0-224 0-16-16 0-112 0 0 16 112 0 0 224-224 0 0-48-16 0 0 48zm80-384l0 288-288 0 0-288 288 0zM176 96l-16 0 0 16 0 288 0 16 16 0 288 0 16 0 0-16 0-288 0-16-16 0L176 96zm64 80l160 0 0 160-160 0 0-160zm-16-16l0 16 0 160 0 16 16 0 160 0 16 0 0-16 0-160 0-16-16 0-160 0-16 0z" />
    </Icon>
);

export default BringFront;