
import { Icon } from "../../index";

/**
 * A component that renders the `ghost` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ghost?s=sharp-light ghost}
 * @preview ![ghost](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ghost.svg)
 */
const Ghost: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M88.1 426.9L71.8 408.3 49.7 419.4 32 428.2 32 192c0-88.4 71.6-160 160-160s160 71.6 160 160l0 236.2-17.7-8.8-22.1-11.1-16.3 18.6-34.8 39.7-47.9-42.6L192 405.2l-21.3 18.9-47.9 42.6L88.1 426.9zM0 480l32-16 32-16 34.9 39.9L120 512l23.9-21.3L192 448l48.1 42.7L264 512l21.1-24.1L320 448l32 16 32 16 0-35.8L384 192C384 86 298 0 192 0S0 86 0 192L0 444.2 0 480zM152 192a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm128 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Ghost;