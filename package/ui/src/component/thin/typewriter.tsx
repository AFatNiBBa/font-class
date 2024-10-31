
import { Icon } from "../../index";

/**
 * A component that renders the `typewriter` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/typewriter?s=thin typewriter}
 * @preview ![typewriter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/typewriter.svg)
 */
const Typewriter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 16C94.3 16 80 30.3 80 48l0 112-16 0L64 48C64 21.5 85.5 0 112 0L359.4 0c12.7 0 24.9 5.1 33.9 14.1l40.6 40.6c9 9 14.1 21.2 14.1 33.9l0 71.4-16 0 0-71.4c0-8.5-3.4-16.6-9.4-22.6L382.1 25.4c-6-6-14.1-9.4-22.6-9.4L112 16zM16 224l0 32c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-114.7 0c-4.2 0-8.3 1.7-11.3 4.7l-13.3 13.3c-9 9-21.2 14.1-33.9 14.1l-101.5 0c-12.7 0-24.9-5.1-33.9-14.1l-13.3-13.3c-3-3-7.1-4.7-11.3-4.7L32 208c-8.8 0-16 7.2-16 16zm326.6-22.6c6-6 14.1-9.4 22.6-9.4L480 192c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l0 160c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-160c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l114.7 0c8.5 0 16.6 3.4 22.6 9.4l13.3 13.3c6 6 14.1 9.4 22.6 9.4l101.5 0c8.5 0 16.6-3.4 22.6-9.4l13.3-13.3zM48 288l0 160c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-160L48 288zM160 448l192 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-192 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zM144 336a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm16 80a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm48-80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm16 80a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm48-80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm16 80a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm48-80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm16 80a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm48-80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
    </Icon>
);

export default Typewriter;