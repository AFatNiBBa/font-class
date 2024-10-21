
import { Icon } from "../../index";

/**
 * A component that renders the `projector` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/projector?s=sharp-thin projector}
 * @preview ![projector](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/projector.svg)
 */
const Projector: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M424 8l0-8L408 0l0 8 0 112 0 8 16 0 0-8L424 8zM261.7 42.3L256 36.7 244.7 48l5.7 5.7 80 80 5.7 5.7L347.3 128l-5.7-5.7-80-80zm320 11.3l5.7-5.7L576 36.7l-5.7 5.7-80 80-5.7 5.7L496 139.3l5.7-5.7 80-80zM272 320a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm304 0c0-43.6-17.4-83.1-45.7-112l93.7 0 0 224-48 0-16 0-29.7 0c28.3-28.9 45.7-68.4 45.7-112zm0 128l48 0 16 0 0-16 0-224 0-16-16 0-112 0c-26.7-20.1-60-32-96-32s-69.3 11.9-96 32L16 192 0 192l0 16L0 432l0 16 16 0 48 0 0 56 0 8 16 0 0-8 0-56 240 0c26.7 20.1 60 32 96 32s69.3-11.9 96-32c0 0 0 0 0 0l48 0 0 56 0 8 16 0 0-8 0-56zM80 432l-16 0-48 0 0-224 285.7 0C273.4 236.9 256 276.4 256 320s17.4 83.1 45.7 112L80 432zm32-112a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM96 288a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm96 48a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm-32-16a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
    </Icon>
);

export default Projector;