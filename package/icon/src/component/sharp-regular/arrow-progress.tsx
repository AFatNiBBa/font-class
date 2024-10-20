
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-progress` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-progress?s=sharp-regular arrow-progress}
 * @preview ![arrow-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-progress.svg)
 */
const ArrowProgress: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 88l0 40 24 0 72-64L280 0 256 0l0 40L24 40 0 40 0 64 0 256l0 24 24 0 440 0 0 144-48 0 0-40-40 0-48 0-40 0 0 40 0 48 0 40 40 0 48 0 40 0 0-40 72 0 24 0 0-24 0-192 0-24-24 0L48 232 48 88l208 0zM160 384l0 40-32 0 0-40-40 0-48 0L0 384l0 40 0 48 0 40 40 0 48 0 40 0 0-40 32 0 0 40 24 0 72-64-72-64-24 0zM424 40l48 0 0 48-48 0 0-48zM384 0l0 40 0 48 0 40 40 0 48 0 40 0 0-40 0-48 0-40L472 0 424 0 384 0zM88 424l0 48-48 0 0-48 48 0zm240 0l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default ArrowProgress;