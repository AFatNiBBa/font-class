
import { Icon } from "../../index";

/**
 * A component that renders the `sleigh` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sleigh?s=sharp-solid sleigh}
 * @preview ![sleigh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sleigh.svg)
 */
const Sleigh: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 32L0 32 0 96l32 0 0 160c0 53 43 96 96 96l0 32 64 0 0-32 192 0 0 32 64 0 0-32c53 0 96-43 96-96l0-96 32 0 0-64-32 0-32 0-32 0-32 0 0 128-46.6 0c-80.5 0-155.3-41.5-198-109.7C173 65.7 120.9 35.2 64 32.2l0-.2-9 0L32 32zM640 384l0-32-64 0 0 32 0 32L64 416l-32 0 0 64 32 0 544 0 32 0 0-32 0-64z" />
    </Icon>
);

export default Sleigh;