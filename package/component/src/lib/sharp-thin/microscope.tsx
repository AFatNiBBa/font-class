
import { Icon } from "../../index";

/**
 * A component that renders the `microscope` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microscope?s=sharp-thin microscope}
 * @preview ![microscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/microscope.svg)
 */
const Microscope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M168 0l-8 0 0 8 0 24-24 0-8 0 0 8 0 272 0 8 8 0 144 0 8 0 0-8 0-168c97.2 0 176 78.8 176 176s-78.8 176-176 176l-80 0L8 496l-8 0 0 16 8 0 200 0 80 0 216 0 8 0 0-16-8 0-139.1 0C432.6 466.4 480 398.7 480 320c0-106-86-192-192-192l0-88 0-8-8 0-24 0 0-24 0-8-8 0L168 0zM272 128l0 16 0 160-128 0 0-256 24 0 8 0 0-8 0-24 64 0 0 24 0 8 8 0 24 0 0 80zM160 352l0 16 8 0 80 0 8 0 0-16-8 0-80 0-8 0zM96 416l0 16 8 0 208 0 8 0 0-16-8 0-208 0-8 0z" />
    </Icon>
);

export default Microscope;