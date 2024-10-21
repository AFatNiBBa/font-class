
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-circle-check` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-circle-check?s=light pipe-circle-check}
 * @preview ![pipe-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pipe-circle-check.svg)
 */
const PipeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 96c8.8 0 16 7.2 16 16l0 16 224 0 192 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 0 48.7c-11 1-21.7 3-32 5.9l0-38.6-192 0L32 160l0 192 288.7 0c-.5 5.3-.7 10.6-.7 16s.2 10.7 .7 16L32 384l0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32L0 144l0-32c0-8.8 7.2-16 16-16zM496 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm67.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
    </Icon>
);

export default PipeCircleCheck;