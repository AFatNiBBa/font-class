
import { Icon } from "../../index";

/**
 * A component that renders the `backward-step` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-step?s=thin backward-step}
 * @preview ![backward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/backward-step.svg)
 */
const BackwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 72c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 184 0 184c0 4.4 3.6 8 8 8s8-3.6 8-8l0-162.4L239.8 441c5.3 4.5 12 7 19 7c16.1 0 29.2-13.1 29.2-29.2l0-325.5C288 77.1 274.9 64 258.8 64c-6.9 0-13.7 2.5-19 7L48 234.4 48 72zm0 184c0-.4 .2-.8 .5-1L250.2 83.2c2.4-2 5.4-3.2 8.6-3.2c7.3 0 13.2 5.9 13.2 13.2l0 325.5c0 7.3-5.9 13.2-13.2 13.2c-3.1 0-6.2-1.1-8.6-3.2L48.5 257c-.3-.3-.5-.6-.5-1z" />
    </Icon>
);

export default BackwardStep;