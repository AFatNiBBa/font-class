
import { Icon } from "../../index";

/**
 * A component that renders the `escalator` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/escalator?s=thin escalator}
 * @preview ![escalator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/escalator.svg)
 */
const Escalator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M280 56a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm-96 0a56 56 0 1 1 112 0A56 56 0 1 1 184 56zM400.6 161.8c13.1-11.5 30-17.8 47.4-17.8l120 0c39.8 0 72 32.2 72 72s-32.2 72-72 72l-92.9 0L239.4 494.2c-13.1 11.5-30 17.8-47.4 17.8L72 512c-39.8 0-72-32.2-72-72s32.2-72 72-72l92.9 0L400.6 161.8zM448 160c-13.6 0-26.7 4.9-36.9 13.9L173.2 382c-1.5 1.3-3.3 2-5.3 2l-96 0c-30.9 0-56 25.1-56 56s25.1 56 56 56l120 0c13.6 0 26.7-4.9 36.9-13.9L466.8 274c1.5-1.3 3.3-2 5.3-2l96 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-120 0zM312.8 190.8l-12.7 11.1c-9-24.5-32.5-41.9-60.1-41.9c-35.3 0-64 28.7-64 64l0 86.5-16 14L160 224c0-44.2 35.8-80 80-80c32.3 0 60.2 19.2 72.8 46.8z" />
    </Icon>
);

export default Escalator;