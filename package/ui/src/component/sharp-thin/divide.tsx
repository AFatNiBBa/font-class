
import { Icon } from "../../index";

/**
 * A component that renders the `divide` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/divide?s=sharp-thin divide}
 * @preview ![divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/divide.svg)
 */
const Divide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176 80l0 96 96 0 0-96-96 0zM160 64l16 0 96 0 16 0 0 16 0 96 0 16-16 0-96 0-16 0 0-16 0-96 0-16zM432 264l-8 0L24 264l-8 0 0-16 8 0 400 0 8 0 0 16zM272 336l-96 0 0 96 96 0 0-96zm-96-16l96 0 16 0 0 16 0 96 0 16-16 0-96 0-16 0 0-16 0-96 0-16 16 0z" />
    </Icon>
);

export default Divide;