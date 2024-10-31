
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-progress` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-progress?s=sharp-thin arrow-progress}
 * @preview ![arrow-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-progress.svg)
 */
const ArrowProgress: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 16l0 96 96 0 0-96-96 0zM384 0l16 0 96 0 16 0 0 16 0 96 0 16-16 0-96 0-16 0 0-16 0-96 0-16zM287 12.7l6.1 5.1 48 40 7.4 6.1-7.4 6.1-48 40-6.1 5.1L276.7 103l6.1-5.1 31-25.9L16 72l0 176 488 0 8 0 0 8 0 192 0 8-8 0-88 0 0 40 0 16-16 0-96 0-16 0 0-16 0-96 0-16 16 0 96 0 16 0 0 16 0 40 80 0 0-176L8 264l-8 0 0-8L0 64l0-8 8 0 305.9 0-31-25.9L276.7 25 287 12.7zM128 400l0 40 89.9 0-31-25.9-6.1-5.1L191 396.7l6.1 5.1 48 40 7.4 6.1-7.4 6.1-48 40-6.1 5.1L180.7 487l6.1-5.1 31-25.9L128 456l0 40 0 16-16 0-96 0L0 512l0-16 0-96 0-16 16 0 96 0 16 0 0 16zm-16 0l-96 0 0 96 96 0 0-96zm192 0l0 96 96 0 0-96-96 0z" />
    </Icon>
);

export default ArrowProgress;