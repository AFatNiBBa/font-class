
import { Icon } from "../../index";

/**
 * A component that renders the `coffin-cross` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffin-cross?s=sharp-thin coffin-cross}
 * @preview ![coffin-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/coffin-cross.svg)
 */
const CoffinCross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M17.6 147.4L119.8 16l144.3 0L366.4 147.4 267.9 496l-151.8 0L17.6 147.4zM104 512l176 0L384 144 272 0 112 0 0 144 104 512zm96-408l0-8-16 0 0 8 0 72-80 0-8 0 0 16 8 0 80 0 0 152 0 8 16 0 0-8 0-152 80 0 8 0 0-16-8 0-80 0 0-72z" />
    </Icon>
);

export default CoffinCross;