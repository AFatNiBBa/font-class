
import { Icon } from "../../index";

/**
 * A component that renders the `microwave` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microwave?s=sharp-light microwave}
 * @preview ![microwave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/microwave.svg)
 */
const Microwave: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 64l0 352-32 0-32 0L96 416l-32 0-32 0L32 64l512 0zM512 448l32 0 32 0 0-32 0-352 0-32-32 0L32 32 0 32 0 64 0 416l0 32 32 0 32 0 0 32 32 0 0-32 384 0 0 32 32 0 0-32zM464 112l0 256 32 0 0-256-32 0zM128 160l256 0 0 160-256 0 0-160zM96 128l0 32 0 160 0 32 32 0 256 0 32 0 0-32 0-160 0-32-32 0-256 0-32 0z" />
    </Icon>
);

export default Microwave;