
import { Icon } from "../../index";

/**
 * A component that renders the `presentation-screen` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/presentation-screen?s=sharp-regular presentation-screen}
 * @preview ![presentation-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/presentation-screen.svg)
 */
const PresentationScreen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 0L0 0 0 48l24 0 528 0 24 0 0-48L552 0 24 0zm8 80l0 248 0 24 24 0 208 0 0 46.1-61.8 61.8-17 17 33.9 33.9 17-17L288 441.9l51.8 51.8 17 17 33.9-33.9-17-17L312 398.1l0-46.1 208 0 24 0 0-24 0-248-48 0 0 224-208 0L80 304 80 80 32 80z" />
    </Icon>
);

export default PresentationScreen;