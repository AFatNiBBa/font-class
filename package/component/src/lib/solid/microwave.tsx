
import { Icon } from "../../index";

/**
 * A component that renders the `microwave` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microwave?s=solid microwave}
 * @preview ![microwave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/microwave.svg)
 */
const Microwave: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l-320 0c0 17.7-14.3 32-32 32s-32-14.3-32-32c-35.3 0-64-28.7-64-64L0 96zm96 56l0 176c0 13.3 10.7 24 24 24l272 0c13.3 0 24-10.7 24-24l0-176c0-13.3-10.7-24-24-24l-272 0c-13.3 0-24 10.7-24 24zm400-40c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default Microwave;