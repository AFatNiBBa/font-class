
import { Icon } from "../../index";

/**
 * A component that renders the `paint-roller` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paint-roller?s=sharp-thin paint-roller}
 * @preview ![paint-roller](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/paint-roller.svg)
 */
const PaintRoller: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 16l0 128L16 144 16 16l384 0zM16 0L0 0 0 16 0 144l0 16 16 0 384 0 16 0 0-16 0-56 0-16 0-56 0-16L400 0 16 0zM272 496l-96 0 0-160 96 0 0 160zM176 320l-16 0 0 16 0 160 0 16 16 0 96 0 16 0 0-16 0-160 0-16-16 0-40 0 0-72 264 0 8 0 0-8 0-160 0-8-8 0-48 0 0 16 40 0 0 144-264 0-8 0 0 8 0 80-40 0z" />
    </Icon>
);

export default PaintRoller;