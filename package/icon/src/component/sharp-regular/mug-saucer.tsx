
import { Icon } from "../../index";

/**
 * A component that renders the `mug-saucer` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-saucer?s=sharp-regular mug-saucer}
 * @preview ![mug-saucer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mug-saucer.svg)
 */
const MugSaucer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M432 80l0 256-288 0 0-256 288 0zM144 32L96 32l0 48 0 256 0 48 48 0 288 0 48 0 0-48 0-48 32 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-32 0-32 0-16 0L144 32zM512 240l-32 0 0-160 32 0c44.2 0 80 35.8 80 80s-35.8 80-80 80zM24 432L0 432l0 48 24 0 528 0 24 0 0-48-24 0L24 432z" />
    </Icon>
);

export default MugSaucer;