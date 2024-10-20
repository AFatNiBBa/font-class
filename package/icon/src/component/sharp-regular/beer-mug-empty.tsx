
import { Icon } from "../../index";

/**
 * A component that renders the `beer-mug-empty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug-empty?s=sharp-regular beer-mug-empty}
 * @preview ![beer-mug-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/beer-mug-empty.svg)
 */
const BeerMugEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 80L80 80l0 352 256 0 0-63.4c0-.4 0-.7 0-1.1L336 80zm48 303.7l0 48.3 0 48-48 0L80 480l-48 0 0-48L32 80l0-48 48 0 256 0 48 0 0 48 0 16 104 0 24 0 0 24 0 192 0 15.7L497.6 334 384 383.7zM384 144l0 187.3 80-35L464 144l-80 0zM160 128l0 16 0 224 0 16-32 0 0-16 0-224 0-16 32 0zm64 0l0 16 0 224 0 16-32 0 0-16 0-224 0-16 32 0zm64 0l0 16 0 224 0 16-32 0 0-16 0-224 0-16 32 0z" />
    </Icon>
);

export default BeerMugEmpty;