
import { Icon } from "../../index";

/**
 * A component that renders the `skull-crossbones` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull-crossbones?s=regular skull-crossbones}
 * @preview ![skull-crossbones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/skull-crossbones.svg)
 */
const SkullCrossbones: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M290.1 185.8C309.6 170.4 320 149.5 320 128c0-39-37.5-80-96-80s-96 41-96 80c0 21.5 10.4 42.4 29.9 57.8c11.4 9.1 18.1 22.9 18.1 37.6l0 8.6c0 4.4 3.6 8 8 8l80 0c4.4 0 8-3.6 8-8l0-8.6c0-14.6 6.7-28.5 18.1-37.6zM320 232c0 30.9-25.1 56-56 56l-80 0c-30.9 0-56-25.1-56-56l0-8.6C98.5 200 80 165.9 80 128C80 57.3 144.5 0 224 0s144 57.3 144 128c0 37.9-18.5 72-48 95.4l0 8.6zM2.7 268.9c6.1-11.8 20.6-16.3 32.4-10.2L224 357l188.9-98.2c11.8-6.1 26.2-1.5 32.4 10.2s1.5 26.3-10.2 32.4L276 384l159.1 82.7c11.8 6.1 16.3 20.6 10.2 32.4s-20.6 16.3-32.4 10.2L224 411 35.1 509.3c-11.8 6.1-26.3 1.5-32.4-10.2s-1.5-26.2 10.2-32.4L172 384 12.9 301.3C1.2 295.2-3.4 280.7 2.7 268.9zM160 136a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default SkullCrossbones;