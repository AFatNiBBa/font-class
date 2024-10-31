
import { Icon } from "../../index";

/**
 * A component that renders the `box` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box?s=sharp-thin box}
 * @preview ![box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/box.svg)
 */
const Box: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M74.4 48L216 48l0 128L17.5 176 74.4 48zM232 176l0-128 141.6 0 56.9 128L232 176zm200 16l0 272L16 464l0-272 416 0zM384 32L64 32 0 176 0 464l0 16 16 0 416 0 16 0 0-16 0-288L384 32z" />
    </Icon>
);

export default Box;